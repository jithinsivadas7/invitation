import { motion } from 'framer-motion';
import { balloonAnimation, floatAnimation } from '@/animations';

interface BalloonProps {
  color: string;
  size: string;
  position: string;
  animation?: 'float' | 'balloon';
  opacity?: number;
}

export const Balloon = ({ 
  color, 
  size, 
  position, 
  animation = 'balloon',
  opacity = 0.2 
}: BalloonProps) => {
  return (
    <motion.div
      animate={animation === 'balloon' ? balloonAnimation : floatAnimation}
      className={`absolute ${position} ${size} opacity-${opacity * 100}`}
    >
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${color} rounded-full transform rotate-45`}></div>
        <div className={`absolute inset-0 ${color} rounded-full transform -rotate-45`}></div>
        <div className={`absolute top-1/4 left-1/4 w-1/2 h-1/2 ${color} rounded-full`}></div>
        <div className={`absolute bottom-0 left-1/2 w-0.5 h-6 bg-${color.split('-')[1]}-500 transform -translate-x-1/2`}></div>
      </div>
    </motion.div>
  );
}; 