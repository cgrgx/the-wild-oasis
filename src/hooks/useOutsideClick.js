import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handler();
      }
    };
    document.addEventListener("click", handleClick, listenCapturing);
    document.addEventListener("keydown", handleEscape, listenCapturing);
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
      document.removeEventListener("keydown", handleEscape, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
}
