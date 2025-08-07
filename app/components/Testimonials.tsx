'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[--gray-dark]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Dimension has revolutionized our design process. The real-time collaboration is a game-changer!"
            author="Jane Doe"
            role="Product Designer"
            avatarUrl="/avatars/jane.jpg" 
          />
          <TestimonialCard 
            quote="The 3D tools are incredibly intuitive. We've cut our prototyping time in half."
            author="John Smith"
            role="3D Artist"
            avatarUrl="/avatars/jane.jpg" 
          />
          <TestimonialCard 
            quote="Cross-platform support means I can work from anywhere. Highly recommended!"
            author="Alex Johnson"
            role="Freelance Creator"
            avatarUrl="/avatars/jane.jpg" 
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;