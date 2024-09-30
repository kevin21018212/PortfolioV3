"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/homepage/landing.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { boxVariants, containerVariants } from "../../utils/framer";

import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import { CardContainer, CardBody, CardItem } from "@/utils/components/card";

export const ShaderGradientBackground: React.FC<{ importedFiber?: any }> = ({ importedFiber }) => {
  return (
    <ShaderGradientCanvas
      importedFiber={importedFiber}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=3&cAzimuthAngle=170&cDistance=10&cPolarAngle=50&cameraZoom=1&color1=%2327b3f2&color2=%23f27127&color3=%23d66322&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=0.5&positionX=-1&positionY=1&positionZ=-0.5&range=disabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=45&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.2&uFrequency=0&uSpeed=0.3&uStrength=5&uTime=0&wireframe=false"
      />
    </ShaderGradientCanvas>
  );
};

export const TextBox: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <CardContainer>
      <CardBody>
        <motion.a
          className={styles.button}
          onClick={handleClick}
          onTap={handleClick}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 1 }}
        >
          <CardItem translateZ={1000}>
            <motion.h2
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
            </motion.h2>
          </CardItem>
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
              <CardItem as="h2" translateZ={20}>
                Developer
              </CardItem>
              <CardItem as="h2" translateZ={20}>
                Creator
              </CardItem>
              <CardItem as="h2" translateZ={20}>
                Designer
              </CardItem>
            </motion.div>
          </motion.div>
        </motion.a>
      </CardBody>
    </CardContainer>
  );
};

export const IconBox: React.FC = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={boxVariants()}
        className={styles.symbolBox}
      >
        <a href="https://github.com/kevin21018212" target="_blank" rel="noopener noreferrer">
          <FaGithub size={100} color="#F0F0F0" />
        </a>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={boxVariants()}
        className={styles.infoBox}
      >
        <a href="https://www.linkedin.com/in/matthew-bennett-592102252/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={100} color="#F0F0F0" />
        </a>
      </motion.div>
    </>
  );
};

const Landing: React.FC = () => {
  return (
    <>
      <div className={styles.landingContainer}>
        <div className={styles.gradientBox}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            style={{
              borderRadius: "0px 20px 20px 0px",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <ShaderGradientBackground />
          </motion.div>
        </div>
        <div className={styles.textBox}>
          <TextBox />
        </div>
        <div className={styles.iconBox}>
          <IconBox />
        </div>
      </div>
    </>
  );
};

export default Landing;
