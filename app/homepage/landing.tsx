"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/homepage/landing.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { boxVariants } from "../../utils/framer";

import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import SpecialButton from "@/utils/specialButton";

// ShaderGradientBackground Component
const ShaderGradientBackground: React.FC = () => {
  return (
    <div className={styles.liquidGradient}>
      <ShaderGradientCanvas
        style={{
          zIndex: -10,
          borderRadius: "0px 20px 20px 0px",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3&cAzimuthAngle=170&cDistance=10&cPolarAngle=50&cameraZoom=1&color1=%23efd404&color2=%23ef5e04&color3=%23ff7a00&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=0.5&positionX=-1&positionY=1&positionZ=-0.5&range=disabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.3&uStrength=5&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
    </div>
  );
};

// TextBox Component
const TextBox: React.FC = () => {
  return (
    <div className={styles.textBox}>
      <SpecialButton />
    </div>
  );
};

// IconBox Component
const IconBox: React.FC = () => {
  return (
    <>
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
    </>
  );
};

// Landing Component
const Landing: React.FC = () => {
  return (
    <div className={styles.landingContainer}>
      <ShaderGradientBackground />
      <TextBox />
      <IconBox />
    </div>
  );
};

export default Landing;
