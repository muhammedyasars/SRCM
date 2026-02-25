'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  onClick 
}: CardProps) => {
  const baseClasses = 'bg-white rounded-2xl p-6 shadow-card border border-gray-100 transition-all duration-300';
  const hoverClasses = hoverEffect 
    ? 'hover:shadow-card-hover hover:-translate-y-2 cursor-pointer' 
    : '';
  
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  if (onClick) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{ 
          y: hoverEffect ? -8 : 0,
          boxShadow: hoverEffect ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 4px 20px rgba(27, 58, 107, 0.08)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const ServiceCard = ({ 
  title, 
  description, 
  icon,
  onClick 
}: ServiceCardProps) => {
  return (
    <Card hoverEffect={true} onClick={onClick} className="service-card">
      <div className="w-12 h-12 rounded-xl bg-[#EEF2F9] flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-heading font-semibold text-[#1B3A6B] text-base mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm font-body leading-relaxed">
        {description}
      </p>
      <motion.button
        className="mt-4 flex items-center gap-1 text-[#2D7A3A] text-sm font-heading font-semibold"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Learn more <ChevronRight className="w-4 h-4" />
      </motion.button>
    </Card>
  );
};