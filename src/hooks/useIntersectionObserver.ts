import { useEffect } from "react";

export function useIntersectionObserver(target: string, onObserve: () => void) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onObserve();
        }
      });
    });
    const els = document.querySelector(target) as HTMLElement;

    observer.observe(els);

    return () => observer.disconnect();
  }, []);

  return;
}
