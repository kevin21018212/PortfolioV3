// animations.ts

// Enhanced text animation with added bounce effect and easing
export const textAnimation = {
  inactive: {
    opacity: 0,
    x: "-5vh",
  },
  active: {
    opacity: 1,
    x: "0vh",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      bounce: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
      duration: 0.8,
    },
  },
};

// Stagger children with an oscillating effect
export const staggerChildrenAnimation = {
  active: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 80,
    },
  },
};

// Description variants with smoother transitions
export const descriptionVariants = {
  hidden: { height: "12.5%", opacity: 0 },
  visible: {
    height: "82.5%",
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 0.6,
    },
  },
};

export const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 15,
      duration: 0.8,
    },
  },
};

export const boxVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.5,
      bounce: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.5,
      bounce: 0.4,
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: "#ef5e04",
    rotate: 5,
    transition: {
      ease: "linear",
      duration: 0.25,
    },
  },
};

export const bounceVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      delay: 0.3,
    },
  },
};

export const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.5, 1],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};

export const titleVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const descriptionTextVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const cornerVariants = {
  hidden: { rotate: 0, opacity: 0 },
  visible: {
    rotate: 360,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};
