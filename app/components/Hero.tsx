'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const Hero: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[--background]">
      <div className="absolute inset-0 bg-gradient-to-br from-[--purple-light] via-[--purple-primary] to-[--purple-dark] opacity-30" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-4xl px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-[--text-primary]"
        >
          Build Stunning 3D Designs
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 text-[--text-secondary]"
        >
          Dimension empowers creators to bring ideas to life with intuitive tools and real-time collaboration.
        </motion.p>
        <motion.button
          variants={itemVariants}
          className="btn-primary text-lg hover:bg-[--accent] transition-colors"
        >
          Get Started
        </motion.button>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[--background] to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Hero;