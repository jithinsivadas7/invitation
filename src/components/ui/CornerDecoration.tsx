import { motion } from 'framer-motion';

interface CornerDecorationProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
  color?: 'pink' | 'purple' | 'rose' | 'fuchsia' | 'slate';
}

const sizes = {
  sm: { outer: 'w-6 h-6', inner: 'w-1.5 h-1.5' },
  md: { outer: 'w-8 h-8', inner: 'w-2 h-2' },
  lg: { outer: 'w-16 h-16', inner: 'w-4 h-4' }
};

const positions = {
  'top-left': { outer: 'top-2 left-2 border-t-2 border-l-2', inner: 'top-1 left-1 border-t border-l rotate-45' },
  'top-right': { outer: 'top-2 right-2 border-t-2 border-r-2', inner: 'top-1 right-1 border-t border-r -rotate-45' },
  'bottom-left': { outer: 'bottom-2 left-2 border-b-2 border-l-2', inner: 'bottom-1 left-1 border-b border-l rotate-45' },
  'bottom-right': { outer: 'bottom-2 right-2 border-b-2 border-r-2', inner: 'bottom-1 right-1 border-b border-r -rotate-45' }
};

const colors = {
  pink: { outer: 'border-pink-300', inner: 'border-pink-400' },
  purple: { outer: 'border-purple-300', inner: 'border-purple-400' },
  rose: { outer: 'border-rose-300', inner: 'border-rose-400' },
  fuchsia: { outer: 'border-fuchsia-300', inner: 'border-fuchsia-400' },
  slate: { outer: 'border-slate-300', inner: 'border-slate-400' }
};

export const CornerDecoration = ({ position, size = 'md', delay = 0.2, color = 'slate' }: CornerDecorationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute ${positions[position].outer} ${sizes[size].outer} ${colors[color].outer}`}
    >
      <div className={`absolute ${positions[position].inner} ${sizes[size].inner} ${colors[color].inner}`}></div>
    </motion.div>
  );
}; 