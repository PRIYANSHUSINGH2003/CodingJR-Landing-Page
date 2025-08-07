'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const ProductTour: FC = () => {
  return (
    <section id="product-tour" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-12"
          >
            Take a Product Tour
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Intuitive Interface</h3>
              <p>Explore our user-friendly dashboard and tools.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Powerful Rendering</h3>
              <p>See real-time 3D rendering in action.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Collaboration Features</h3>
              <p>Experience seamless team workflows.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4">Export Options</h3>
              <p>Learn about various export formats and integrations.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTour;