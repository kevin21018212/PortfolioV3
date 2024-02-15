export const textanimation = {
  inactive: {
    opacity: 0,
    translateX: "-5vh",
  },
  active: {
    opacity: 1,
    translateX: "0vh",
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
  hidden: { height: "10%" },
  visible: { height: "90%" },
};
