'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { COLORS, ANIMATION } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'phone' | 'none';
  onClick?: () => void;
  className?: string;
  href?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'none',
  onClick,
  className = '',
  href,
  disabled = false
}: ButtonProps) => {
  const baseClasses = 'font-heading font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg inline-flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 focus:ring-green-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white focus:ring-navy-500',
    'outline-white': 'border-2 border-white/60 text-white hover:bg-white/15 hover:border-white focus:ring-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'phone' ? Phone : null;
  
  const buttonContent = (
    <>
      {children}
      {IconComponent && <IconComponent className="w-4 h-4" />}
    </>
  );

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ 
          scale: disabled ? 1 : 1.05,
          y: disabled ? 0 : -2
        }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17 
        }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
    >
      {buttonContent}
    </motion.button>
  );
};