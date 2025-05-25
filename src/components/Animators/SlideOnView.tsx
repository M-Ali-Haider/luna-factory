"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type Direction = "top" | "bottom" | "left" | "right";

interface SlideInViewProps {
  children: React.ReactNode;
  from: Direction;
  delay?: number;
}

const getInitialPosition = (from: Direction) => {
  switch (from) {
    case "top":
      return { y: -50, opacity: 0 };
    case "bottom":
      return { y: 50, opacity: 0 };
    case "left":
      return { x: -50, opacity: 0 };
    case "right":
      return { x: 50, opacity: 0 };
  }
};

export default function SlideInView({
  children,
  from,
  delay = 0,
}: SlideInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div ref={ref} initial={getInitialPosition(from)} animate={controls}>
      {children}
    </motion.div>
  );
}
