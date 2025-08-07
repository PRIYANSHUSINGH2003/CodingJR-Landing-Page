'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
};

const TestimonialCard: FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  avatarUrl,
  className = '',
}) => {
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`card relative ${className}`}
    >
      <FaQuoteLeft className="text-[--purple-primary] text-4xl opacity-20 absolute top-4 left-4" />
      <p className="mb-4 italic text-[--gray-light] text-lg md:text-xl">&quot;{quote}&quot;</p>
      <div className="flex items-center mt-4">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={author}
            className="w-10 h-10 rounded-full object-cover mr-4 border-2 border-[--purple-primary]"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[--purple-dark] mr-4" />
        )}
        <div>
          <h4 className="font-semibold text-[--purple-primary]">{author}</h4>
          <p className="text-sm text-[--gray-light]">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;