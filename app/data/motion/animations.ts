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

<<<<<<< HEAD
export const outerBoxVariants = {
=======
export const boxVariants = {
>>>>>>> 63dc4835381a9d671cbfb950105e0c0be151e1a2
  hidden: {
    width: 0,
    height: 0,
    opacity: 0,
<<<<<<< HEAD
    transition: {
      duration: 1,
=======
    backgroundColor: "transparent", // Set background color to transparent
    transition: {
      duration: 0.75,
>>>>>>> 63dc4835381a9d671cbfb950105e0c0be151e1a2
    },
  },
  visible: {
    width: "100%",
    height: "100%",
    opacity: 1,
<<<<<<< HEAD
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
=======
    backgroundColor: "#131313",
    transition: {
      duration: 0.75,
      backgroundColor: {
        delay: 5.5,
        duration: 5,
      },
>>>>>>> 63dc4835381a9d671cbfb950105e0c0be151e1a2
    },
  },
};
