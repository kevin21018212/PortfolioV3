"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import styles from "@/styles/homepage/projectinfo.module.scss";
import { staggerText, springTransition } from "../../utils/framer";
import { Project } from "@/utils/data/dataType";

const leftTextVariant = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: springTransition(300, 20, undefined, 0.1 * index),
  }),
};

const rightTextVariant = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: springTransition(300, 20, undefined, 0.1 * index),
  }),
};

const ProjectInfo = ({ projectData }: { projectData: Project | undefined }) => {
  const [animationState, setAnimationState] = useState("hidden");

  useEffect(() => {
    setAnimationState("hidden");

    setTimeout(() => {
      setAnimationState("visible");
    }, 150);
  }, [projectData]);

  return (
    <div>
      {projectData && (
        <>
          <motion.div
            variants={staggerText}
            initial="hidden"
            animate={animationState}
            exit="hidden"
            className={styles.projectsContent}
          >
            {/* LEFT SECTION */}
            <div className={styles.left}>
              {/* Top Left Project Number */}
              <motion.div className={styles.topLeft} custom={1} variants={leftTextVariant}>
                <motion.p>{projectData.projectNumber}</motion.p>
              </motion.div>

              {/* Middle Left Project Title and Tag */}
              <motion.div className={styles.middleLeft}>
                <motion.h1 custom={2} variants={leftTextVariant}>
                  {projectData.projectTitle}
                </motion.h1>
                <motion.p custom={3} variants={leftTextVariant}>
                  {projectData.projectTag}
                </motion.p>
              </motion.div>
            </div>

            {/* RIGHT SECTION */}
            <div className={styles.right}>
              <motion.div className={styles.middleRight}>
                <motion.h3 custom={4} variants={rightTextVariant}>
                  IDEA
                </motion.h3>
                <motion.p custom={5} variants={rightTextVariant}>
                  {projectData.description}
                </motion.p>
              </motion.div>

              <motion.div className={styles.bottomRight}>
                <motion.p custom={6} variants={rightTextVariant}>
                  {projectData.projectTech}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ProjectInfo;
