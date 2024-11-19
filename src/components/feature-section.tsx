import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FloatingElement } from './floating-element';
import { TextReveal } from './text-reveal';

interface FeatureSectionProps {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
  isReversed: boolean;
}

export function FeatureSection({ title, description, icon: Icon, imageUrl, isReversed }: FeatureSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const xForward = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const xReverse = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-between gap-8 md:gap-12`}
          style={{ opacity }}
        >
          <motion.div className="w-full md:w-1/2">
            <FloatingElement>
              <Icon className="w-12 h-12 md:w-16 md:h-16 text-purple-500 mb-4 md:mb-6" />
            </FloatingElement>
            <TextReveal>{title}</TextReveal>
            <motion.p
              className="text-base md:text-xl text-gray-300"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
                x: useTransform(scrollYProgress, [0, 1], [25, -25])
              }}
            >
              {description}
            </motion.p>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            style={{ scale }}
          >
            <img 
              src={imageUrl} 
              alt={title} 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}