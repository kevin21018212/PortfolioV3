"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "@/app/styles/homepage/projectinfo.module.css";
import {
  staggerChildrenAnimation,
  textanimation,
} from "@/app/data/motion/animations";
import { Project } from "@/app/data/types";

const ProjectInfo = ({ projectData }: { projectData: Project }) => {
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
            <motion.div className={styles.topLeft} variants={textanimation}>
              <motion.p> {projectData.projectNumber}</motion.p>
            </motion.div>
            <motion.div className={styles.middleLeft} variants={textanimation}>
              <h1>{projectData.projectTitle}</h1>
              <p>{projectData.projectTag}</p>
            </motion.div>

            <motion.div className={styles.middleRight} variants={textanimation}>
              <motion.h3>IDEA</motion.h3>
              <p> {projectData.description}</p>
            </motion.div>

            <motion.div className={styles.bottomRight} variants={textanimation}>
              <p> {projectData.projectTech}</p>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
