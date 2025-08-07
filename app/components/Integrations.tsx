'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const integrationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const Integrations: FC = () => {
  return (
    <section id="integrations" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Seamless Integrations
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Figma', 'Sketch', 'Adobe XD', 'Blender', 'Unity', 'Unreal Engine', 'Slack', 'Trello'].map((tool) => (
            <motion.div
              key={tool}
              variants={integrationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-black p-4 rounded-lg text-center"
            >
              <p className="font-semibold">{tool}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;