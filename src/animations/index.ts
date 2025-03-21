export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const floatAnimation = {
  y: [0, -30, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const balloonAnimation = {
  y: [0, -50, 0],
  scale: [1, 1.1, 1],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const starAnimation = {
  y: [0, -100],
  opacity: [1, 0],
  scale: [1, 0.5],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeOut"
  }
};

export const twinkleAnimation = {
  opacity: [0.3, 1, 0.3],
  scale: [1, 1.2, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
}; 