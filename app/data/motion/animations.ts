export const textanimation = {
  inactive: {
    opacity: 0,
    translateX: '-5vh',
  },
  active: {
    opacity: 1,
    translateX: '0vh',
  },
};

export const staggerChildrenAnimation = {
  active: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const descriptionVariants = {
  hidden: {height: '12.5%'},
  visible: {height: '82.5%'},
};

export const boxVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    type: 'spring',
    transition: {
      stiffness: 15,
      damping: 1,
      mass: 1,
      duration: 0.35,
    },
  },
  hover: {
    scale: 1.1,
    backgroundColor: '#ef5e04',
    transition: {
      ease: 'linear',
      duration: 0.25,
    },
  },
};
