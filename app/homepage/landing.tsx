"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/homepage/landing.module.css";
import {
  innerBoxVariants,
  outerBoxVariants,
} from "@/app/data/motion/animations";
const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.liquidGradient}></div>

      <div className={styles.textBox}>
        <h1>Developer</h1>
        <h1>Programmer</h1>
        <h1>Designer</h1>
      </div>

      {/* Animate infoBox */}
      <motion.div
        className={styles.infoBox}
        variants={outerBoxVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={innerBoxVariants}
          initial="hidden"
          animate="visible"
          className={styles.boxInfo}
        ></motion.div>
      </motion.div>
      {/* Animate symbolBox */}
      <motion.div
        className={styles.symbolBox}
        variants={outerBoxVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={styles.boxInfo}
          variants={innerBoxVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;