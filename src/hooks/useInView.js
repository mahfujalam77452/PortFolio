import { useState, useEffect } from "react";

export function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once visible, stop observing (one-time animation)
          observer.unobserve(el);
        }
      },
      { threshold: options.threshold || 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options.threshold]);

  return inView;
}
