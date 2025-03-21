'use client';

import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { HeroSection } from '@/components/sections/HeroSection';
import { CoupleSection } from '@/components/sections/CoupleSection';
import { DetailsSection } from '@/components/sections/DetailsSection';
import { CornerDecoration } from '@/components/ui/CornerDecoration';
import { Balloon } from '@/components/ui/Balloon';
import { STRUCTURED_DATA } from '@/constants/wedding';
import { staggerChildren } from '@/animations';

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <AnimatePresence>
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
          {/* Main Corner Decorations */}
          <CornerDecoration position="top-left" size="lg" delay={0.5} />
          <CornerDecoration position="top-right" size="lg" delay={0.7} />
          <CornerDecoration position="bottom-left" size="lg" delay={0.9} />
          <CornerDecoration position="bottom-right" size="lg" delay={1.1} />
          
          <div className="container mx-auto px-4 py-12 relative max-w-7xl">
            {/* Hero Section */}
            <div className="mb-10">
              <HeroSection />
            </div>

            {/* Couple Section */}
            <motion.section 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="mb-12"
            >
              <CoupleSection />
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
                  color="bg-red-400"
                  size="w-16 h-16"
                  position="-top-8 -left-4"
                />
                <Balloon
                  color="bg-pink-400"
                  size="w-20 h-20"
                  position="top-1/2 -right-8"
                  animation="float"
                />
                <Balloon
                  color="bg-purple-400"
                  size="w-16 h-16"
                  position="bottom-0 left-1/4"
                />
              </div>

              <DetailsSection />
            </motion.section>
          </div>
        </main>
      </AnimatePresence>
    </>
  );
}

