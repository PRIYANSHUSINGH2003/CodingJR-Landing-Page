'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const Pricing: FC = () => {
  return (
    <section id="pricing" className="py-20 bg-[--background]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title text-[--text-primary]"
        >
          Flexible Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card text-center border-[--border]"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[--text-primary]">Free</h3>
            <p className="text-4xl font-bold mb-6 text-[--accent]">$0/mo</p>
            <ul className="space-y-2 mb-6 text-[--text-secondary]">
              <li>Basic features</li>
              <li>Limited storage</li>
              <li>Community support</li>
            </ul>
            <button className="btn-primary w-full hover:bg-[--accent]">Choose Plan</button>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card text-center border-2 border-[--purple-primary] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-[--accent] text-white px-2 py-1 text-sm font-semibold">Popular</div>
            <h3 className="text-2xl font-semibold mb-4 text-[--text-primary]">Pro</h3>
            <p className="text-4xl font-bold mb-6 text-[--accent]">$19/mo</p>
            <ul className="space-y-2 mb-6 text-[--text-secondary]">
              <li>All features</li>
              <li>Unlimited storage</li>
              <li>Priority support</li>
            </ul>
            <button className="btn-primary w-full hover:bg-[--accent]">Choose Plan</button>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card text-center border-[--border]"
          >
            <h3 className="text-2xl font-semibold mb-4 text-[--text-primary]">Enterprise</h3>
            <p className="text-4xl font-bold mb-6 text-[--accent]">Custom</p>
            <ul className="space-y-2 mb-6 text-[--text-secondary]">
              <li>Custom features</li>
              <li>Dedicated support</li>
              <li>API access</li>
            </ul>
            <button className="btn-primary w-full hover:bg-[--accent]">Contact Us</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;