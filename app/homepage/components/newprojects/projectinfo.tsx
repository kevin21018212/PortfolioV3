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
            <motion.p className="s" variants={textanimation}>
              {projectData.topRight}
            </motion.p>
            <motion.div
              className={`${styles.middleLeft} `}
              variants={textanimation}
            >
              {projectData.middleRight}
            </motion.div>
            <motion.p
              className={`${styles.bottom} "m"`}
              variants={textanimation}
            >
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
              <motion.p className="t3">IDEA</motion.p>
              <motion.p className={`"s" ${styles.ideabody}`}>
                {projectData.middleMiddle}
              </motion.p>
            </motion.div>
            <motion.p
              className={`${styles.bottomMiddle} "m"`}
              variants={textanimation}
            >
              {projectData.bottomMiddle}
            </motion.p>
          </motion.div>
          <div className={styles.projectsContentRight}></div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
