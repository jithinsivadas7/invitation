'use client';

import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { HeroSection } from '@/components/sections/HeroSection';
import { CoupleSection } from '@/components/sections/CoupleSection';
import { DetailsSection } from '@/components/sections/DetailsSection';
import { CornerDecoration } from '@/components/ui/CornerDecoration';
import { Balloon } from '@/components/ui/Balloon';
import { STRUCTURED_DATA } from '@/constants/wedding';
import { translations } from '@/constants/translations';
import { staggerChildren } from '@/animations';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

export default function MalayalamPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          ...STRUCTURED_DATA,
          name: translations.ml.meta.title,
          description: translations.ml.meta.description,
          inLanguage: "ml",
          alternateName: translations.en.meta.title,
          image: translations.ml.meta.image,
        }) }}
      />
      <AnimatePresence>
        <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
          {/* Main Corner Decorations */}
          <CornerDecoration position="top-left" size="lg" delay={0.5} color="pink" />
          <CornerDecoration position="top-right" size="lg" delay={0.7} color="purple" />
          <CornerDecoration position="bottom-left" size="lg" delay={0.9} color="rose" />
          <CornerDecoration position="bottom-right" size="lg" delay={1.1} color="fuchsia" />
          
          <div className="container mx-auto px-4 py-12 relative max-w-7xl">
            {/* Hero Section */}
            <div className="mb-10">
              <HeroSection translations={translations.ml.hero} />
            </div>

            {/* Couple Section */}
            <motion.section 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="mb-12"
            >
              <CoupleSection translations={translations.ml.couple} />
            </motion.section>

            {/* Details Section */}
            <motion.section 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="relative"
            >
              {/* Decorative Balloons */}
              <div className="absolute inset-0 pointer-events-none">
                <Balloon
                  color="bg-rose-400"
                  size="w-16 h-16"
                  position="-top-8 -left-4"
                  shape="heart"
                  opacity={0.3}
                />
                <Balloon
                  color="bg-fuchsia-400"
                  size="w-20 h-20"
                  position="top-1/2 -right-8"
                  animation="float"
                  shape="round"
                  opacity={0.3}
                />
                <Balloon
                  color="bg-purple-400"
                  size="w-16 h-16"
                  position="bottom-0 left-1/4"
                  shape="heart"
                  opacity={0.3}
                />
                <Balloon
                  color="bg-pink-400"
                  size="w-12 h-12"
                  position="top-1/4 right-1/4"
                  shape="round"
                  opacity={0.2}
                />
                <Balloon
                  color="bg-rose-300"
                  size="w-14 h-14"
                  position="bottom-1/4 right-1/3"
                  shape="heart"
                  opacity={0.2}
                />
              </div>

              <DetailsSection translations={translations.ml.details} />
            </motion.section>
          </div>

          {/* Language Switcher */}
          <motion.nav 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex gap-6">
            <Link 
                href="/" 
                className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-2 group"
              >
                English
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              {/* <Link href="/invite" className="text-slate-600 hover:text-slate-900 transition-colors">Invite View</Link> */}
            </div>
          </motion.nav>
        </main>
      </AnimatePresence>
    </>
  );
} 