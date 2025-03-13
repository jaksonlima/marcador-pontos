"use client";

import { useEffect, useState } from "react";

interface ServerEvent {
  message: string;
  timestamp: string;
}

export default function Home() {
  const [events, setEvents] = useState<ServerEvent[]>([]);

  useEffect(() => {
    const eventSource = new EventSource("/api/events");

    eventSource.onmessage = (event: MessageEvent) => {
      console.log({ event });
      const data: ServerEvent = JSON.parse(event.data);
      setEvents((prev) => [...prev, data]);
    };

    eventSource.onerror = () => {
      console.log("Conexão encerrada.");
      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  return (
    <div>
      <h1>Eventos do Servidor</h1>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.timestamp}: {event.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
