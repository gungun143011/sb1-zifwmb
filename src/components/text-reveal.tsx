import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface TextRevealProps {
  children: string;
}

export function TextReveal({ children }: TextRevealProps) {
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"]
  });

  return (
    <motion.h2 
      ref={text} 
      className="text-5xl font-bold mb-4 overflow-hidden"
      style={{
        opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
        transform: useTransform(
          scrollYProgress,
          [0, 1],
          ["translateY(50px) skew(-10deg)", "translateY(0px) skew(0deg)"]
        ),
      }}
    >
      {children}
    </motion.h2>
  );
}