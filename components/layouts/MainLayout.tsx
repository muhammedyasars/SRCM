'use client';

import { motion } from 'framer-motion';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { PageKey } from '../../utils/navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  activePage?: PageKey;
  onNavigate?: (page: PageKey) => void;
}

export const MainLayout = ({ children, activePage, onNavigate }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          delay: 0.1
        }}
      >
        <Navbar activePage={activePage} onNavigate={onNavigate} />
      </motion.header>
      
      <motion.main 
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {children}
      </motion.main>
      
      <motion.footer
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          delay: 0.5
        }}
      >
        <Footer onNavigate={onNavigate} />
      </motion.footer>
    </div>
  );
};