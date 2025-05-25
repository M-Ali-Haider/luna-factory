'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScaleInViewProps {
  children: React.ReactNode;
  delay?: number;
  initialScale?: number; // Default is 0.8 (80% size)
}

export default function ScaleInView({
  children,
  delay = 0,
  initialScale = 0.8,
}: ScaleInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, delay },
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: initialScale, opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
