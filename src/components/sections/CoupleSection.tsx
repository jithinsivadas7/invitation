import { motion } from 'framer-motion';
import { CornerDecoration } from '@/components/ui/CornerDecoration';
import { useImageSlider } from '@/hooks/useImageSlider';
import { fadeInUp } from '@/animations';

interface CoupleSectionProps {
  translations: {
    names: string;
    mainHosts: string;
    coHosts: string;
    invitation: string;
    coHostsPrefix: string;
  }
}

export const CoupleSection = ({ translations }: CoupleSectionProps) => {
  const { currentImage, currentImageIndex } = useImageSlider();

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <motion.div 
        variants={fadeInUp}
        className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg group"
      >
        {/* Corner decorations */}
        <CornerDecoration position="top-left" size="sm" />
        <CornerDecoration position="top-right" size="sm" />
        <CornerDecoration position="bottom-left" size="sm" />
        <CornerDecoration position="bottom-right" size="sm" />
        
        {/* Image */}
        <motion.img
          key={currentImageIndex}
          src={currentImage.src}
          alt={currentImage.alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition-all duration-300" />
      </motion.div>

      {/* Content Section */}
      <motion.div 
        variants={fadeInUp}
        className="flex flex-col space-y-6 text-center md:text-left"
      >
        <div className="relative inline-block">
          <CornerDecoration position="top-left" size="sm" />
          <CornerDecoration position="top-right" size="sm" />
          <CornerDecoration position="bottom-left" size="sm" />
          <CornerDecoration position="bottom-right" size="sm" />
          
          <motion.h2 
            variants={fadeInUp}
            className="text-center text-3xl md:text-4xl font-serif text-slate-800 mb-2 px-6 py-4 bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent"
          >
            {translations.names}
          </motion.h2>
        </div>

        <motion.div 
          variants={fadeInUp}
          className="space-y-4"
        >
          <p className="text-lg text-slate-700 text-center">
            <strong>{translations.mainHosts}</strong> {translations.invitation}
          </p>
          {/* <p className="text-lg text-slate-700">
            <strong>{translations.coHosts}</strong>, {translations.coHostsPrefix}
          </p> */}
        </motion.div>
      </motion.div>
    </div>
  );
}; 