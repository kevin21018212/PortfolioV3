"use client";
import React from "react";
import styles from "@/styles/homepage/landingMobile.module.scss";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";
import { IconBox, ShaderGradientBackground, TextBox } from "./landing";

// Landing Component
const LandingMobile: React.FC = () => {
  const importedFiberProps = { ...fiber, ...drei, ...reactSpring };

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
