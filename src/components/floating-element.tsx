import { useSpring, motion } from 'framer-motion';
import { useEffect } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
}

export function FloatingElement({ children }: FloatingElementProps) {
  const y = useSpring(0, { stiffness: 100, damping: 5 });
  const rotate = useSpring(0, { stiffness: 100, damping: 5 });

  useEffect(() => {
    y.set(Math.random() * 10);
    rotate.set(Math.random() * 5);

    const interval = setInterval(() => {
      y.set(Math.random() * 10);
      rotate.set(Math.random() * 5);
    }, 3000);

    return () => clearInterval(interval);
  }, [y, rotate]);

  return (
    <motion.div style={{ y, rotate }} className="inline-block">
      {children}
    </motion.div>
  );
}