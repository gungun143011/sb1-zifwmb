import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SpotlightTextProps {
  children: React.ReactNode;
}

export function SpotlightText({ children }: SpotlightTextProps) {
  const spotlightRef = useRef<HTMLSpanElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        const rect = spotlightRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.span
      ref={spotlightRef}
      className="relative inline-block text-transparent bg-clip-text"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%), linear-gradient(to right, #60a5fa, #a78bfa)`,
      }}
    >
      {children}
    </motion.span>
  );
}