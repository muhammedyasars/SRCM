'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import type { RefObject } from 'react';

interface UseAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export const useAnimation = (
  ref: RefObject<HTMLElement>,
  options: UseAnimationOptions = {}
) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0
  } = options;

  const isInView = useInView(ref, { 
    amount: threshold,
    once: triggerOnce 
  });
  
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return { isInView, shouldAnimate };
};