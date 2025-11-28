"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const HomeCounter = ({ end = "100+", duration = 2, color = "#000"  }) => {
  // Extract numeric part (e.g. "100+ → 100")
  const numericEnd = parseInt(end.replace(/\D/g, ""), 10);

  // Extract suffix (e.g. "+" or "%", etc.)
  const suffix = end.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = numericEnd / (duration * 60); // 60fps

      const counter = setInterval(() => {
        start += increment;

        if (start >= numericEnd) {
          start = numericEnd;
          clearInterval(counter);
        }

        setCount(Math.floor(start));
      }, 1000 / 60);
    }
  }, [isInView, numericEnd, duration]);

  return (
    <span
      ref={ref}
      className="text-5xl font-bold"
      style={{ color: color }}
    >
      {count}{suffix}
    </span>
  );
};

export default HomeCounter;