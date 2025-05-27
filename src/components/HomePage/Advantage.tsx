"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const AnimatedNumber = ({
  value,
  extra,
  precision = 0,
}: {
  value: number;
  extra?: string;
  precision?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 1000,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <h3 ref={ref} className="text-4xl">
      {displayValue.toLocaleString(undefined, {
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      })}
      {extra}
    </h3>
  );
};

const Advantages = () => {
  return (
    <div className="flex max-[1024px]:flex-col bg-white mx-auto px-4 md:px-12 py-12 shadow-lg shadow-black/50 rounded-3xl -translate-y-1/9 max-[1000px]:translate-y-10 mb-6">
      <div className="w-1/2 max-[1024px]:w-full">
        <h1 className="font-barlow font-medium text-primary text-5xl mb-4 max-[1200px]:text-2xl">
          Our Advantages
        </h1>
        <p>
          We have a professional team. You can directly find high-quality source
          factories on the website. You can also express your own creative ideas
          and find like-minded partners.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 w-1/2 p-4 text-center max-[1024px]:w-full max-[1024px]:grid-cols-1">
        <div>
          <AnimatedNumber value={15000} />
          <p className="font-medium">Registered users</p>
        </div>
        <div>
          <AnimatedNumber value={1320} />
          <p className="font-medium">Factory</p>
        </div>
        <div>
          <AnimatedNumber value={96} extra="%" />
          <p className="font-medium">Success Rate</p>
        </div>
        <div>
          <AnimatedNumber value={16.7} extra="k" precision={1} />
          <p className="font-medium">Creative Ideas</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
