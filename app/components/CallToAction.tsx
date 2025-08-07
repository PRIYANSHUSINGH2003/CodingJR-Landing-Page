'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const CallToAction: FC = () => {
  return (
    <section className="py-20 bg-purple-900 text-center">
      <motion.div
        variants={ctaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Designs?</h2>
        <p className="text-xl mb-8">Join thousands of creators using Dimension today.</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-900 px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100"
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToAction;