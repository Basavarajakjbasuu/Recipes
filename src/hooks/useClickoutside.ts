import { useEffect, useRef } from "react";

type ClickOutsideCallback = () => void;

export default function useClickOutside (callbackFn: ClickOutsideCallback) {
  const domNodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (domNodeRef.current && !domNodeRef.current.contains(event.target as Node)) {
        callbackFn()
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [callbackFn]);

  return domNodeRef
} 