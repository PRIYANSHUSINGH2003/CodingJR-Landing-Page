'use client';
import { FC, useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--background]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">Dimension</div>
        <div className="hidden md:flex space-x-6 shadow-[0_0_2px_2px_#282626] rounded-[9px] bg-black p-2">
          <a href="#features" className="hover:text-[--purple-primary] transition-colors">Features</a>
          <a href="#pricing" className="hover:text-[--purple-primary] transition-colors">Pricing</a>
          <a href="#docs" className="hover:text-[--purple-primary] transition-colors">Docs</a>
        </div>
        <button className="hidden md:block btn-primary shadow-[0_0_2px_2px_#282626] rounded-[9px] px-2 py-1">Sign Up</button>
        <button 
          className="md:hidden text-[--foreground]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[--background] px-4 py-4 space-y-4 shadow-lg"
        >
          <a href="#features" className="block hover:text-[--purple-primary] transition-colors">Features</a>
          <a href="#pricing" className="block hover:text-[--purple-primary] transition-colors">Pricing</a>
          <a href="#docs" className="block hover:text-[--purple-primary] transition-colors">Docs</a>
          <button className="w-full btn-primary">Sign Up</button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;