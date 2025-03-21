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
    // Convert opacity (0-1) to Tailwind opacity class (0-100)
    const opacityClass = `opacity-${Math.round(opacity * 100)}`;
  
    // Extract color name and properly handle both formats
    const colorName = color.startsWith('bg-') ? color.split('-')[1] : color;
    const bgColorClass = color.startsWith('bg-') ? color : `bg-${color}`;
    
    // For SVG fill, we need to convert bg-red-500 to text-red-500 (for path fill)
    const fillColorClass = bgColorClass.replace('bg-', 'text-');
  return (
    <motion.div
      animate={animation === 'balloon' ? balloonAnimation : floatAnimation}
      className={`absolute ${position} ${size} opacity-${opacity * 100}`}
    >
      <div className="absolute inset-0">
        {shape === 'heart' ? (
          <div className="relative w-full h-full">
            {/* Left circle */}
            <div 
              className={`absolute left-0 top-[20%] w-[50%] h-[50%] ${color} rounded-full`}
            />
            {/* Right circle */}
            <div 
              className={`absolute right-0 top-[20%] w-[50%] h-[50%] ${color} rounded-full`}
            />
            {/* Bottom point */}
            <div 
              className={`absolute top-[45%] left-[25%] w-[50%] h-[50%] ${color}`}
              style={{
                transform: 'rotate(45deg)'
              }}
            />
          </div>
        ) : (
          // Round balloon shape
          <>

        <div className="relative w-full h-full">
          {/* Main balloon body */}
          <div className={`absolute inset-0 ${bgColorClass} rounded-full`}></div>
          
          {/* Balloon highlight */}
          <div className={`absolute w-1/3 h-1/3 bg-white rounded-full opacity-30`} 
               style={{ top: '20%', left: '20%' }}></div>
          
          {/* Balloon knot */}
          <div className={`absolute w-1/6 h-1/6 ${bgColorClass} rounded-full`}
               style={{ bottom: '-5%', left: '42%' }}></div>
          
          {/* String */}
          <div 
            className="absolute w-px h-10 transform"
            style={{
              bottom: '-15%',
              left: '50%',
              transform: 'translateX(-50%)',
              background: `linear-gradient(to bottom, var(--${colorName}-500, currentColor), transparent)`
            }}
          />
        </div>
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