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
    transition: {
      type: 'spring',
      stiffness: 25,
      damping: 2,
      mass: 3,
      duration: 2,
    },
  },
};
