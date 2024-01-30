"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "../../css/projects/projectinfo.module.css";

type ProjectData = {
  id: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  middleMiddle: string;
  bottomMiddle: string;
};

const textanimation = {
  inactive: {
    opacity: 0,
    translateX: "-5vh",
  },
  active: {
    opacity: 1,
    translateX: "0vh",
  },
};

const staggerChildrenAnimation = {
  active: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const ProjectInfo = ({ projectData }: { projectData: ProjectData }) => {
  const [animationState, setAnimationState] = useState("inactive");

  useEffect(() => {
    setAnimationState("inactive");

    setTimeout(() => {
      setAnimationState("active");
    }, 150);
  }, [projectData]);

  return (
    <div className={styles.projectsContent}>
      {projectData && (
        <>
          <motion.div
            variants={staggerChildrenAnimation}
            initial="inactive"
            animate={animationState}
            exit="inactive"
            className={styles.projectsContentLeft}
          >
            <motion.p className={styles.topLeft} variants={textanimation}>
              {projectData.topRight}
            </motion.p>
            <motion.div className={styles.middleLeft} variants={textanimation}>
              <h1>{projectData.middleRight}</h1>
            </motion.div>
            <motion.p className={styles.bottomLeft} variants={textanimation}>
              {projectData.bottomRight}
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerChildrenAnimation}
            initial="inactive"
            animate={animationState}
            exit="inactive"
            className={styles.projectsContentMiddle}
          >
            <motion.div className={styles.idea} variants={textanimation}>
              <motion.h3>IDEA</motion.h3>
              <motion.p className="s">{projectData.middleMiddle}</motion.p>
            </motion.div>
            <motion.h6 className={styles.bottomMiddle} variants={textanimation}>
              {projectData.bottomMiddle}
            </motion.h6>
          </motion.div>
          <div className={styles.projectsContentRight}></div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
