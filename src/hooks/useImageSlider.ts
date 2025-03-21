import { useState, useEffect } from 'react';
import { IMAGES } from '@/constants/wedding';

export const useImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return {
    currentImage: IMAGES[currentImageIndex],
    currentImageIndex,
    totalImages: IMAGES.length
  };
}; 