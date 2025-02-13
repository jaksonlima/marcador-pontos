import { ToastContainer } from "react-toastify";

export function AppToastContainer() {
  return (
    <>
      <ToastContainer
        draggable
        closeButton
        closeOnClick
        theme="dark"
        position="bottom-right"
      />
    </>
  );
}
