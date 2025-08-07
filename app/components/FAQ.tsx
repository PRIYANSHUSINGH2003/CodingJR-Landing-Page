'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const FAQ: FC = () => {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          <FAQItem 
            question="What is Dimension?"
            answer="Dimension is a powerful 3D design platform that enables creators to build stunning designs with intuitive tools and real-time collaboration."
          />
          <FAQItem 
            question="Is there a free trial?"
            answer="Yes, we offer a 14-day free trial for all new users to explore our Pro features."
          />
          <FAQItem 
            question="What file formats are supported?"
            answer="Dimension supports a wide range of 3D file formats including OBJ, FBX, GLTF, and more."
          />
          <FAQItem 
            question="Can I use Dimension on mobile?"
            answer="While our full features are optimized for desktop, we have a mobile app for viewing and basic editing on the go."
          />
          <FAQItem 
            question="How does collaboration work?"
            answer="Invite team members to your project and work simultaneously with real-time updates and version control."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;