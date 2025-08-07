'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaTools, FaMobileAlt } from 'react-icons/fa';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: 'collaboration' | 'tools' | 'support';
}

const iconMap = {
  collaboration: FaUsers,
  tools: FaTools,
  support: FaMobileAlt,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const FeatureCard: FC<FeatureCardProps> = ({ title, description, icon }) => {
  const Icon = iconMap[icon];

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="card flex flex-col items-center text-center"
    >
      <Icon className="text-[--purple-primary] text-4xl mb-4" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-[--gray-light]">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;