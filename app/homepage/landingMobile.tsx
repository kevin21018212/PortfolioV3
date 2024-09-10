"use client";
import React, { useState } from "react";
import styles from "@/styles/homepage/landingMobile.module.scss";
import tStyles from "@/styles/homepage/landing.module.scss";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { IconBox, ShaderGradientBackground } from "./landing";
import { motion } from "framer-motion";

// Landing Component
const LandingMobile: React.FC = () => {
  const importedFiberProps = { ...fiber, ...drei, ...reactSpring };

  const TextBox: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    };

    return (
      <motion.a className={tStyles.button} onClick={handleClick} onTap={handleClick} initial={{ boxShadow: "none" }}>
        <motion.h1
          className={tStyles.primaryText}
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
          className={tStyles.secondaryText}
          initial={{ top: "100%" }}
          animate={{ top: isClicked ? 0 : "100%" }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          <motion.div
            className={tStyles.background}
            initial={{ backgroundColor: "transparent", scale: 0 }}
            animate={{
              backgroundColor: isClicked ? "#ff7a00" : "transparent",
              scale: isClicked ? 1.1 : 0,
            }}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <motion.h2>Developer</motion.h2>
            <motion.h2>Creator</motion.h2>
            <motion.h2>Designer</motion.h2>
          </motion.div>
        </motion.div>
      </motion.a>
    );
  };

  return (
    <div className={styles.landingContainerMobile}>
      <div className={styles.gradientBox}>
        <ShaderGradientBackground importedFiber={importedFiberProps} />
      </div>
      <div className={styles.textBox}>
        <TextBox />
      </div>
      <div className={styles.iconBox}>
        <IconBox />
      </div>
    </div>
  );
};

export default LandingMobile;
