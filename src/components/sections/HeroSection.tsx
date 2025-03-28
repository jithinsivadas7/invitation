import { motion } from 'framer-motion';
import { CornerDecoration } from '@/components/ui/CornerDecoration';
import { Balloon } from '@/components/ui/Balloon';
import { HeroTranslations } from '@/types/translations';

interface HeroSectionProps {
  translations: HeroTranslations;
}

export function HeroSection({ translations }: HeroSectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-4 relative"
    >
      <Balloon
        color="bg-pink-400"
        size="w-24 h-24"
        position="-top-10 -left-8"
      />
      <Balloon
        color="bg-purple-400"
        size="w-20 h-20"
        position="-top-4 right-4"
        animation="float"
      />
      
      <div className="relative inline-block">
        <CornerDecoration position="top-left" delay={0.2} />
        <CornerDecoration position="top-right" delay={0.4} />
        <CornerDecoration position="bottom-left" delay={0.6} />
        <CornerDecoration position="bottom-right" delay={0.8} />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-serif text-slate-800 mb-4 tracking-wide px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
        >
          {translations.title}
        </motion.h1>
      </div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-base md:text-lg text-slate-600 font-light px-4"
      >
        {translations.subtitle}
      </motion.p>
    </motion.section>
  );
} 