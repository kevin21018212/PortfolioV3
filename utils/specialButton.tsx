import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Button.module.scss";

const SpecialButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <motion.a
      className={styles.button}
      onClick={handleClick}
      onTap={handleClick}
      onHoverStart={() => setIsClicked(true)}
      onHoverEnd={() => setIsClicked(false)}
      initial={{ boxShadow: "none" }}
    >
      <motion.h1
        className={styles.primaryText}
        initial={{ top: 0, opacity: 1, visibility: "visible" }}
        animate={{
          top: isClicked ? "-100%" : 0,
          opacity: isClicked ? 0 : 1,
          visibility: isClicked ? "hidden" : "visible",
        }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      >
        Hi, I'm Matthew
      </motion.h1>
      <motion.div
        className={styles.secondaryText}
        initial={{ top: "100%" }}
        animate={{ top: isClicked ? 0 : "100%" }}
        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
      >
        <motion.div
          className={styles.background}
          initial={{ backgroundColor: "transparent", scale: 0 }}
          animate={{
            backgroundColor: isClicked ? "#ff7a00" : "transparent",
            scale: isClicked ? 1.1 : 0,
          }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
        >
          <h4 className={styles.programmerText}>Programmer</h4>
          <h4 className={styles.programmerText}>Creator</h4>
          <h4 className={styles.programmerText}>Designer</h4>
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

export default SpecialButton;
