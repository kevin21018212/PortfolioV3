"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "@/styles/homepage/projectinfo.module.scss";

import { Project } from "@/utils/data/types";
import { staggerChildrenAnimation, textAnimation } from "../../utils/framer";

const ProjectInfo = ({ projectData }: { projectData: Project | undefined }) => {
  const [animationState, setAnimationState] = useState("inactive");

  useEffect(() => {
    setAnimationState("inactive");

    setTimeout(() => {
      setAnimationState("active");
    }, 150);
  }, [projectData]);

  return (
    <div>
      {projectData && (
        <>
          <motion.div
            variants={staggerChildrenAnimation}
            initial="inactive"
            animate={animationState}
            exit="inactive"
            className={styles.projectsContent}
          >
            <div className={styles.left}>
              <motion.div className={styles.topLeft} variants={textAnimation}>
                <motion.p>{projectData.projectNumber}</motion.p>
              </motion.div>
              <motion.div
                className={styles.middleLeft}
                variants={textAnimation}
              >
                <h1>{projectData.projectTitle}</h1>
                <p>{projectData.projectTag}</p>
              </motion.div>
            </div>
            <div className={styles.right}>
              <motion.div
                className={styles.middleRight}
                variants={textAnimation}
              >
                <motion.h3>IDEA</motion.h3>
                <p>{projectData.description}</p>
              </motion.div>
              <motion.div
                className={styles.bottomRight}
                variants={textAnimation}
              >
                <p>{projectData.projectTech}</p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
