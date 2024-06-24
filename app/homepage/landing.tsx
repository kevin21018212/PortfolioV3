"use client";

import { motion } from "framer-motion";
import styles from "@/styles/homepage/landing.module.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { boxVariants } from "../../utils/framer";

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
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={boxVariants}
        className={styles.symbolBox}
      >
        <FaGithub size={100} color="#F0F0F0" />
      </motion.div>

      {/* Animate symbolBox */}

      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={boxVariants}
        className={styles.infoBox}
      >
        <FaLinkedin size={100} color="#F0F0F0" />
      </motion.div>
    </div>
  );
};

export default Landing;
