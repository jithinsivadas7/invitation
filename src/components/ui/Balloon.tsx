import { motion } from 'framer-motion';
import { balloonAnimation, floatAnimation } from '@/animations';

interface BalloonProps {
  color: string;
  size: string;
  position: string;
  animation?: 'float' | 'balloon';
  opacity?: number;
  shape?: 'heart' | 'round';
}

export const Balloon = ({ 
  color, 
  size, 
  position, 
  animation = 'balloon',
  opacity = 0.2,
  shape = 'round'
}: BalloonProps) => {
  return (
    <motion.div
      animate={animation === 'balloon' ? balloonAnimation : floatAnimation}
      className={`absolute ${position} ${size} opacity-${opacity * 100}`}
    >
      <div className="absolute inset-0">
        {shape === 'heart' ? (
          // Heart shape with smoother edges
          <div className="relative w-full h-full">
            {/* Left half of heart */}
            <div 
              className={`absolute w-[45%] h-[70%] ${color}`}
              style={{ 
                left: '5%', 
                transform: 'rotate(-45deg)',
                borderRadius: '50% 50% 0 50%'
              }}
            />
            {/* Right half of heart */}
            <div 
              className={`absolute w-[45%] h-[70%] ${color}`}
              style={{ 
                right: '5%', 
                transform: 'rotate(45deg)',
                borderRadius: '50% 50% 50% 0'
              }}
            />
            {/* Bottom point of heart */}
            <div 
              className={`absolute w-[50%] h-[50%] ${color}`}
              style={{ 
                bottom: '15%', 
                left: '25%',
                transform: 'rotate(45deg)',
                borderRadius: '5px 10px 10px 0'
              }}
            />
          </div>
        ) : (
          // Round balloon shape
          <>
            <div className={`absolute inset-0 ${color} rounded-full transform scale-100`} />
            <div className={`absolute bottom-[10%] left-1/2 w-[40%] h-[40%] ${color} rounded-full transform -translate-x-1/2 scale-90 opacity-80`} />
          </>
        )}
        {/* String */}
        <div 
          className={`absolute -bottom-6 left-1/2 w-0.5 h-6 bg-${color.split('-')[1]}-500 transform -translate-x-1/2`}
          style={{
            background: `linear-gradient(to bottom, ${color.includes('bg-') ? `var(--${color.split('-')[1]}-500)` : color}, transparent)`
          }}
        />
      </div>
    </motion.div>
  );
}; 