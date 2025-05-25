'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function AnimatedProgressBar({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1500, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return () => unsubscribe();
  }, [spring]);

  return (
    <div className="flex-1 flex items-center gap-4" ref={ref}>
      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
        <motion.div
          style={{ width: `${displayValue}%` }}
          className="h-full bg-primary"
        />
      </div>
      <div className="text-primary font-semibold whitespace-nowrap">
        {displayValue}%
      </div>
    </div>
  );
}
