'use client';

import Image from "next/image";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    { src: "/images/groom.jpg", alt: "Groom" },
    { src: "/images/bride.jpeg", alt: "Bride" },
    { src: "/images/couple.jpeg", alt: "Couple" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Athma Prayag & Arya Rajan Wedding",
    "description": "Join us in celebrating the wedding of Athma Prayag & Arya Rajan. We request the pleasure of your company at our wedding celebration.",
    "startDate": "2025-05-01T15:00:00",
    "endDate": "2025-05-01T23:00:00",
    "location": {
      "@type": "Place",
      "name": "Muthirakkalil, Thikkodi",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Thikkodi",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "11.4839858",
        "longitude": "75.6261368"
      }
    },
    "image": "/images/couple.jpeg",
    "organizer": [
      {
        "@type": "Person",
        "name": "Mr. Anil Kumar & Mrs. Geetha Anil"
      },
      {
        "@type": "Person",
        "name": "Mr. Rajan & Mrs. Omana"
      }
    ]
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    y: [0, -30, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const scaleAnimation = {
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const balloonAnimation = {
    y: [0, -50, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const starAnimation = {
    y: [0, -100],
    opacity: [1, 0],
    scale: [1, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeOut"
    }
  };

  const twinkleAnimation = {
    opacity: [0.3, 1, 0.3],
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AnimatePresence>
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          {/* Love Balloons */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-10 left-0 w-40 h-40 md:w-24 md:h-24"
          >
            <motion.div
              animate={balloonAnimation}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0">
                {/* Red Heart Balloon */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-red-500 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 bg-red-500 rounded-full transform -rotate-45"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-red-500 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-red-500 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/3 bg-red-500 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-red-500 rounded-full"></div>
                </div>
                {/* Balloon string */}
                <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-red-600 transform -translate-x-1/2"></div>
              </div>
            </motion.div>
            {/* Stars from balloon */}
            <motion.div
              animate={starAnimation}
              className="absolute top-1/2 left-1/2 w-3 h-3"
            >
              <div className="absolute inset-0 bg-yellow-300 transform rotate-45"></div>
              <div className="absolute inset-0 bg-yellow-300 transform -rotate-45"></div>
              <div className="absolute inset-0 bg-yellow-300 transform rotate-90"></div>
              <div className="absolute inset-0 bg-yellow-300 transform -rotate-90"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-20 right-0 w-48 h-48 md:w-32 md:h-32"
          >
            <motion.div
              animate={floatAnimation}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0">
                {/* Pink Heart Balloon */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-pink-400 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 bg-pink-400 rounded-full transform -rotate-45"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-pink-400 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-pink-400 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/3 bg-pink-400 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-pink-400 rounded-full"></div>
                </div>
                {/* Balloon string */}
                <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-pink-500 transform -translate-x-1/2"></div>
              </div>
            </motion.div>
            {/* Stars from balloon */}
            <motion.div
              animate={starAnimation}
              className="absolute top-1/2 left-1/2 w-3 h-3"
            >
              <div className="absolute inset-0 bg-yellow-300 transform rotate-45"></div>
              <div className="absolute inset-0 bg-yellow-300 transform -rotate-45"></div>
              <div className="absolute inset-0 bg-yellow-300 transform rotate-90"></div>
              <div className="absolute inset-0 bg-yellow-300 transform -rotate-90"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute bottom-20 left-0 w-56 h-56 md:w-40 md:h-40"
          >
            <motion.div
              animate={floatAnimation}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0">
                {/* Purple Heart Balloon */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-purple-400 rounded-full transform rotate-45"></div>
                  <div className="absolute inset-0 bg-purple-400 rounded-full transform -rotate-45"></div>
                  <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-400 rounded-full"></div>
                  <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-purple-400 rounded-full"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1/3 h-1/3 bg-purple-400 rounded-full"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-purple-400 rounded-full"></div>
                </div>
                {/* Balloon string */}
                <div className="absolute bottom-0 left-1/2 w-1 h-8 bg-purple-500 transform -translate-x-1/2"></div>
              </div>
            </motion.div>
            {/* Stars from balloon */}
            <motion.div
              animate={starAnimation}
              className="absolute top-1/2 left-1/2 w-3 h-3"
            >
              <div className="absolute inset-0 bg-yellow-300 transform rotate-45"></div>
              <div className="absolute inset-0 bg-yellow-300 transform -rotate-45"></div>
              <div className="absolute inset-0 bg-yellow-300 transform rotate-90"></div>
              <div className="absolute inset-0 bg-yellow-300 transform -rotate-90"></div>
            </motion.div>
          </motion.div>

          {/* Background Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={twinkleAnimation}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/4 right-0 w-4 h-4"
          >
            <div className="absolute inset-0 bg-yellow-300 transform rotate-45"></div>
            <div className="absolute inset-0 bg-yellow-300 transform -rotate-45"></div>
            <div className="absolute inset-0 bg-yellow-300 transform rotate-90"></div>
            <div className="absolute inset-0 bg-yellow-300 transform -rotate-90"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={twinkleAnimation}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-1/4 left-0 w-4 h-4"
          >
            <div className="absolute inset-0 bg-yellow-300 transform rotate-45"></div>
            <div className="absolute inset-0 bg-yellow-300 transform -rotate-45"></div>
            <div className="absolute inset-0 bg-yellow-300 transform rotate-90"></div>
            <div className="absolute inset-0 bg-yellow-300 transform -rotate-90"></div>
          </motion.div>

          {/* Additional Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={twinkleAnimation}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="absolute top-1/3 right-0 w-3 h-3"
          >
            <div className="w-full h-full bg-yellow-300 transform rotate-45"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={twinkleAnimation}
            transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            className="absolute bottom-1/3 right-0 w-3 h-3"
          >
            <div className="w-full h-full bg-yellow-300 transform rotate-45"></div>
          </motion.div>

          {/* More Stars */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={twinkleAnimation}
            transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            className="absolute top-2/3 left-0 w-2 h-2"
          >
            <div className="w-full h-full bg-yellow-300 transform rotate-45"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={twinkleAnimation}
            transition={{ duration: 2, repeat: Infinity, delay: 3 }}
            className="absolute top-1/4 left-1/4 w-2 h-2"
          >
            <div className="w-full h-full bg-yellow-300 transform rotate-45"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={twinkleAnimation}
            transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
            className="absolute bottom-1/4 right-1/4 w-2 h-2"
          >
            <div className="w-full h-full bg-yellow-300 transform rotate-45"></div>
          </motion.div>

          {/* Existing decorative elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-30"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-30"
          />
          
          {/* Floral Corner Decorations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-slate-300"
          >
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-slate-400 rotate-45"></div>
            <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-400 rotate-45"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-slate-300"
          >
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-slate-400 -rotate-45"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-slate-400 -rotate-45"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute bottom-0 left-0 w-32 h-32 border-b-4 border-l-4 border-slate-300"
          >
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-slate-400 rotate-45"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-slate-400 rotate-45"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-slate-300"
          >
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-slate-400 -rotate-45"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-slate-400 -rotate-45"></div>
          </motion.div>
          
          {/* Inner Corner Decorations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-slate-400"
          >
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-500 rotate-45"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-slate-400"
          >
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-slate-500 -rotate-45"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-slate-400"
          >
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-slate-500 rotate-45"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-slate-400"
          >
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-500 -rotate-45"></div>
          </motion.div>
          
          <div className="container mx-auto px-4 py-12 relative">
            {/* Hero Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="relative inline-block">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-slate-300"
                >
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-slate-400 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-slate-300"
                >
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-slate-400 -rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-slate-300"
                >
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-slate-400 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-slate-300"
                >
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-slate-400 -rotate-45"></div>
                </motion.div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-serif text-slate-800 mb-4 tracking-wide px-8 py-4"
                >
                  Wedding Invitation
                </motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg text-slate-600 font-light italic"
              >
                Join us in celebrating our special day
              </motion.p>
            </motion.section>

            {/* Couple Section */}
            <motion.section 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-12 mb-20"
            >
              <motion.div 
                variants={fadeInUp}
                className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg group"
              >
                {/* Corner decorations - making them smaller */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-white z-10"
                >
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/80 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white z-10"
                >
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/80 -rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white z-10"
                >
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/80 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-white z-10"
                >
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/80 -rotate-45"></div>
                </motion.div>
                
                {/* Image Slider */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={images[currentImageIndex].src}
                      alt={images[currentImageIndex].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                      priority
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/10 transition-opacity duration-300"
                    ></motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Slider Navigation Dots - moved up slightly */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentImageIndex === index ? 'bg-white w-3' : 'bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Slider Navigation Arrows - made slightly smaller */}
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-1.5 z-20 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-1.5 z-20 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col justify-center items-center text-center"
              >
                <div className="relative">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-slate-300"
                  >
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-slate-400 rotate-45"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-slate-300"
                  >
                    <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-slate-400 -rotate-45"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-slate-300"
                  >
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-slate-400 rotate-45"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-slate-300"
                  >
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-slate-400 -rotate-45"></div>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl font-serif text-slate-800 mb-6 px-8 py-4"
                  >
                    Athma Prayag & Arya Rajan
                  </motion.h2>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-slate-600 mb-4 italic"
                >
                  With immense joy and love, Mr. Anil Kumar & Mrs. Geetha Anil invite you to the wedding celebration of their beloved son
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg text-slate-600 italic"
                >
                  Request the pleasure of your company at the wedding celebration of their beloved son
                </motion.p>
              </motion.div>
            </motion.section>

            {/* Details Section */}
            <motion.section 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="text-center mb-20"
            >
              <motion.div 
                variants={fadeInUp}
                className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md relative hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-slate-300"
                >
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-slate-400 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-300"
                >
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-slate-400 -rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-slate-300"
                >
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-slate-400 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-slate-300"
                >
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-slate-400 -rotate-45"></div>
                </motion.div>
                <motion.div 
                  variants={staggerChildren}
                  className="grid md:grid-cols-3 gap-6 text-slate-700"
                >
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300"
                  >
                    <FaCalendarAlt className="text-2xl text-slate-600 mx-auto mb-2" />
                    <p className="text-lg">Thursday, May 1, 2025</p>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300"
                  >
                    <FaClock className="text-2xl text-slate-600 mx-auto mb-2" />
                    <p className="text-lg">3:00 PM onwards</p>
                  </motion.div>
                  <motion.div 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-lg hover:bg-slate-50 transition-colors duration-300"
                  >
                    <FaMapMarkerAlt className="text-2xl text-slate-600 mx-auto mb-2" />
                    <p className="text-lg">Muthirakkalil, Thikkodi</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.section>

            {/* Location Section */}
            <motion.section 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <motion.div 
                variants={fadeInUp}
                className="max-w-2xl mx-auto relative"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-slate-300"
                >
                  <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-slate-400 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-slate-300"
                >
                  <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-slate-400 -rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-slate-300"
                >
                  <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-slate-400 rotate-45"></div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-slate-300"
                >
                  <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-slate-400 -rotate-45"></div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[300px] rounded-lg overflow-hidden shadow-md mb-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1234567890123!2d75.6261368!3d11.4839858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6899686380cff%3A0x56e473c4785fbd8f!2sAnil%20MK%20home!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </motion.div>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="https://www.google.com/maps/place/Anil+MK+home/@11.4839858,75.6247822,18z/data=!4m9!1m2!2m1!1sPlaur+template+thikkodi!3m5!1s0x3ba6899686380cff:0x56e473c4785fbd8f!8m2!3d11.4839858!4d75.6261368!16s%2Fg%2F11shc5v674?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  View on Google Maps
                </motion.a>
              </motion.div>
            </motion.section>
          </div>
        </main>
      </AnimatePresence>
    </>
  );
}

