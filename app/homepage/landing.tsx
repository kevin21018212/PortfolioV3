"use client";

import { motion } from "framer-motion";
import styles from "@/styles/homepage/landing.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { boxVariants, containerVariants } from "../../utils/framer";

import { useState } from "react";
import useMousePosition from "@/utils/animations/useMousePosition";

const Landing: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 50;

  return (
    <div className={styles.landingContainer}>
      <div className={styles.liquidGradient}></div>

      <div className={styles.textBox}>
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x != null ? x - size / 2 : 0}px ${
              y != null ? y - size / 2 : 0
            }px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <h1
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            Designer
            <br /> Developer <br />
            Programmer
          </h1>
        </motion.div>

        <div className={styles.body}>
          <h1>
            Hi i'm Matthew <br />
            <span>Hover me</span>
          </h1>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={boxVariants}
        className={styles.symbolBox}
      >
        <a
          href="https://github.com/kevin21018212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={100} color="#F0F0F0" />
        </a>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={boxVariants}
        className={styles.infoBox}
      >
        <a
          href="https://www.linkedin.com/in/matthew-bennett-592102252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={100} color="#F0F0F0" />
        </a>
      </motion.div>
    </div>
  );
};

export default Landing;
