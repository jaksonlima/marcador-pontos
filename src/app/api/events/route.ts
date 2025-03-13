export async function GET(req: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const sendEvent = () => {
        const data = {
          message: "Olá do servidor!",
          timestamp: new Date().toISOString(),
        };
        controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
      };

      // Enviar um evento a cada 5 segundos
      const interval = setInterval(sendEvent, 5000);

      req.signal.addEventListener("abort", () => {
        clearInterval(interval);
        controller.close();
      });
    },
  });

  console.log({ stream });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
