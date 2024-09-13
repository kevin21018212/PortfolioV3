// Utility function to create spring transition
export const springTransition = (stiffness: number, damping: number, duration?: number, delay?: number) => ({
  type: "spring",
  stiffness,
  damping,
  duration,
  delay,
});

// Utility function to create tween transition
const tweenTransition = (duration: number, ease?: any, delay?: number) => ({
  type: "tween",
  duration,
  ease,
  delay,
});

// Text animation with bounce and easing
export const textAnimation = {
  inactive: {
    opacity: 0,
    x: "-5vh",
  },
  active: {
    opacity: 1,
    x: "0vh",
    transition: {
      ...springTransition(100, 10, 0.8),
      bounce: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

// Stagger children with oscillating effect
export const staggerText = {
  active: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      ...springTransition(80, 20),
    },
  },
};

// Description with smoother transitions
export const descriptionVariants = {
  hidden: {
    height: "12.5%",
    opacity: 0,
  },
  visible: {
    height: "82.5%",
    opacity: 1,
    transition: tweenTransition(0.6, "anticipate"),
  },
};

// Container with scaling and fading
export const containerVariants = {
  hidden: {
    scale: 0.5,
    y: 50,
    opacity: 0,
  },
  visible: (i: number) => ({
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      ...springTransition(400, 50, 0.8, i * 0.1),
      mass: 3,
    },
  }),
};

// Box variants for entry, exit, and hover
export const boxVariants = (hoverColor = "#ef5e04") => ({
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springTransition(300, 20, 0.5),
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0.5,
    transition: springTransition(300, 20, 0.5),
  },
  hover: {
    scale: 1.1,
    backgroundColor: hoverColor,
    rotate: 5,
    transition: tweenTransition(0.25, "linear"),
  },
});

// Bounce variants
export const bounceVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition(500, 20, undefined, 0.3),
  },
};

// Circle variants for scaling and opacity
export const circleVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [0, 1.5, 1],
    opacity: 1,
    transition: springTransition(500, 20),
  },
};

// Slide text variants
export const slideTextVariant = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: tweenTransition(0.6),
  },
};

// Corner variants for rotation and opacity
export const cornerVariant = {
  hidden: {
    rotate: 0,
    opacity: 0,
  },
  visible: {
    rotate: 360,
    opacity: 1,
    transition: springTransition(300, 20),
  },
};

// Staggered div variants
export const staggerDivVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: springTransition(300, 20, undefined, 0.1 * index),
  }),
};
