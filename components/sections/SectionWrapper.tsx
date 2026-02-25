'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useAnimation } from '../../hooks/use-animation';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: 'white' | 'light' | 'dark' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SectionWrapper = ({ 
  children, 
  className = '',
  id,
  backgroundColor = 'white',
  padding = 'lg'
}: SectionWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { shouldAnimate } = useAnimation(ref, { threshold: 0.1, delay: 100 });

  const bgClasses = {
    white: 'bg-white',
    light: 'bg-[#F0F4F8]',
    dark: 'bg-[#1B3A6B]',
    gradient: 'bg-gradient-to-br from-[#1B3A6B] to-[#243F7A]'
  };

  const paddingClasses = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24'
  };

  const sectionClasses = `${bgClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={sectionClasses}
      initial={{ opacity: 0, y: 30 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  badge?: string;
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  align = 'center',
  badge,
  className = ''
}: SectionHeaderProps) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const textAlignment = alignClasses[align];

  return (
    <div className={`mb-14 ${textAlignment} ${className}`}>
      {badge && (
        <motion.div 
          className="inline-flex items-center gap-2 bg-[#e8f5ea] rounded-full px-4 py-1.5 mb-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#2D7A3A] text-sm font-heading font-semibold">
            {badge}
          </span>
        </motion.div>
      )}
      
      {subtitle && (
        <motion.h3 
          className="font-heading font-semibold text-lg text-[#2D7A3A] mb-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {subtitle}
        </motion.h3>
      )}
      
      <motion.h2 
        className="font-heading font-bold text-4xl text-[#1B3A6B] mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p 
          className="text-gray-600 font-body max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};