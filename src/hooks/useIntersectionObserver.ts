import { useEffect, useRef } from "react";

export function useIntersectionObserver(target: string, onObserve: () => void) {
  const observerCallback: IntersectionObserverCallback = (entries, _) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onObserve();
      }
    });
  };
  const observerRef = useRef<IntersectionObserver>(
    new IntersectionObserver(observerCallback)
  );
  useEffect(() => {
    connect();

    return () => observerRef.current.disconnect();
  }, []);

  function disconnect() {
    observerRef.current.disconnect();
  }

  function connect() {
    const el = document.querySelector(target);
    if (el) {
      observerRef.current.observe(el);
    }
  }

  return { observerRef, disconnect, connect };
}
