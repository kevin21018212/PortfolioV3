import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../../css/landing/landingtext.module.css";
import { motion } from "framer-motion";

const LandingText = () => {
  return (
    <div className={styles.landingText}>
      <motion.div
        initial={{ opacity: 0, x: "-5vw" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "-5vw" }}
        className={styles.landingTitle}
      >
        <p className="t4">Hi, I'm Matthew</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-5vw" }}
        animate={{ opacity: 1, x: "0" }}
        exit={{ opacity: 0, x: "-5vw" }}
        transition={{ delay: 0.25 }}
        className={styles.landingTypewriter}
      >
        <div className="t1">
          <TypeAnimation
            sequence={["Developer", 3000, "Programmer", 3000, "Designer", 3000]}
            speed={10}
            repeat={Infinity}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LandingText;
