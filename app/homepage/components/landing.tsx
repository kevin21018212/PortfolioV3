"use client";

import { boxVariants } from "@/app/data/motion/animations";
import { motion } from "framer-motion";
import styles from "../css/landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.liquidGradient}></div>
      <div className={styles.textBox}></div>
      {/* Animate infoBox */}
      <motion.div
        className={styles.infoBox}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
      {/* Animate symbolBox */}
      <motion.div
        className={styles.symbolBox}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
};

export default Landing;
