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
  hidden: { height: "12.5%" },
  visible: { height: "82.5%" },
};

export const outerBoxVariants = {
  hidden: {
    width: 0,
    height: 0,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  visible: {
    width: "100%",
    height: "100%",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const innerBoxVariants = {
  hidden: {
    width: 0,
    backgroundColor: "transparent",
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
  visible: {
    width: "100%",
    opacity: 1,
    backgroundColor: "#131313",
    transition: {
      delay: 1,
      duration: 0.75,
    },
  },
};
