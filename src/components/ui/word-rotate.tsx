"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, type MotionProps } from "motion/react";
import { cn } from "../../../lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
  motionProps?: MotionProps;
}

export function WordRotate({
  words,
  duration = 2500,
  className,
  motionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.4, ease: "easeOut" },
  },
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  if (!words.length) return null;

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className={cn(className)}
          {...motionProps}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
