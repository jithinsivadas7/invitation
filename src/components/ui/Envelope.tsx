import { motion } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

export const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <motion.button
      onClick={onOpen}
      className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all text-lg font-medium shadow-lg hover:shadow-xl flex items-center gap-2"
      whileHover={{ y: 5 }}
      whileTap={{ y: 8 }}
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <span>View Details</span>
      <motion.span
        animate={{
          y: [0, 5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ↓
      </motion.span>
    </motion.button>
  );
}; 