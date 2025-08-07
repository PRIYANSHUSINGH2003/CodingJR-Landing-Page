'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const Features: FC = () => {
  return (
    <section id="features" className="py-20 bg-[--gray-dark]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title text-[--text-primary]"
        >
          Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Real-time Collaboration"
            description="Work together seamlessly with your team in real-time."
            icon="collaboration"
          />
          <FeatureCard 
            title="Advanced 3D Tools"
            description="Create complex designs with ease using our intuitive interface."
            icon="tools"
          />
          <FeatureCard 
            title="Cross-Platform Support"
            description="Access your projects from any device, anywhere."
            icon="support"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;