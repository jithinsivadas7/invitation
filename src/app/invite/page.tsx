'use client';

import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CoupleSection } from '@/components/sections/CoupleSection';
import { DetailsSection } from '@/components/sections/DetailsSection';
import { Balloon } from '@/components/ui/Balloon';
import { STRUCTURED_DATA, IMAGES } from '@/constants/wedding';
import { staggerChildren } from '@/animations';
import Link from 'next/link';

const updatedData = {
  ...STRUCTURED_DATA,
  image: IMAGES[0].src,
};

export default function AltPage() {
  const [showContent, setShowContent] = useState(false);

  const handleViewDetails = () => {
    setShowContent(true);
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(updatedData) }}
      />
      <AnimatePresence>
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50 relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.1)_50%,transparent_52%)] bg-[length:20px_20px]" />
          </div>

          {/* Main Content */}
          <div className="relative">
            {/* Hero Section with Parallax Effect */}
            <AnimatePresence>
              {!showContent && (
                <motion.section 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-screen flex items-center justify-center overflow-hidden"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
                    <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    <Balloon
                      color="bg-pink-300"
                      size="w-24 h-24"
                      position="top-1/4 left-1/4"
                      shape="heart"
                      opacity={0.15}
                    />
                    <Balloon
                      color="bg-red-300"
                      size="w-20 h-20"
                      position="top-1/3 right-1/4"
                      shape="round"
                      opacity={0.15}
                    />
                    <Balloon
                      color="bg-purple-300"
                      size="w-16 h-16"
                      position="bottom-1/4 left-1/3"
                      shape="heart"
                      opacity={0.15}
                    />
                  </div>

                  {/* Hero Content */}
                  <div className="relative z-10 text-center px-4">
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-4xl md:text-6xl font-serif text-slate-800 mb-6"
                    >
                      Wedding Invitation
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-xl md:text-2xl text-slate-600 mb-8"
                    >
                      Join us in celebrating our special day
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="flex justify-center"
                    >
                      <motion.button 
                        onClick={handleViewDetails}
                        className="px-8 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors text-lg font-medium shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>

            {/* Animated Content Sections */}
            <AnimatePresence>
              {showContent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="min-h-screen"
                >
                  {/* Couple Section with Modern Layout */}
                  <section id="couple" className="py-10 sm:py-12 md:py-20 bg-white/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4 max-w-7xl">
                      <motion.div 
                        variants={staggerChildren}
                        initial="initial"
                        animate="animate"
                        className="relative"
                      >
                        <CoupleSection />
                      </motion.div>
                    </div>
                  </section>

                  {/* Details Section with Elegant Design */}
                  <section id="details" className="py-10 sm:py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
                    <div className="container mx-auto px-4 max-w-7xl">
                      <motion.div 
                        variants={staggerChildren}
                        initial="initial"
                        animate="animate"
                        className="relative"
                      >
                        <DetailsSection />
                      </motion.div>
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating Navigation */}
          <AnimatePresence>
            {showContent && (
              <motion.nav 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
              >
                <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-6 py-3 flex gap-6">
                  <Link href="/" className="text-slate-600 hover:text-slate-900 transition-colors">Classic View</Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </main>
      </AnimatePresence>
    </>
  );
} 