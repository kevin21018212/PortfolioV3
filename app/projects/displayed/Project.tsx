"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/project/displayed/project.module.scss";
import contentStyles from "@/styles/project/displayed/projectContent.module.scss";
import { containerVariants } from "@/utils/framer";
import { FaArrowAltCircleUp } from "react-icons/fa";

// LeftContent Component
const LeftContent = ({ project, controls }: any) => {
  return (
    <motion.div
      className={contentStyles.leftContent}
      onClick={() => window.open(project.linkUrl, "_blank")}
      whileHover={{ scale: 1.05 }}
    >
      <div className={contentStyles.topContent}>
        <h1>{project.projectTitle}</h1>
      </div>
      <div className={contentStyles.bottomContent}>
        <h4>00{project.id}</h4>
      </div>
    </motion.div>
  );
};

// TopContent Component
const TopContent = ({ project, controls }: any) => {
  return (
    <>
      <motion.div
        className={styles.topLeft}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        custom={2}
      >
        <div className={contentStyles.topLeftContent}>
          <h2 className={contentStyles.about}>About</h2>
          <p className={contentStyles.description}>{project.description}</p>
        </div>
      </motion.div>
      <motion.div
        className={styles.topRight}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        custom={3}
      >
        <motion.div
          onClick={() => window.open(project.githubUrl, "_blank")}
          whileHover={{ scale: 1.05 }}
          className={contentStyles.topRightContent}
        >
          <FaArrowAltCircleUp size={"50%"} color="#F0F0F0" />
        </motion.div>
      </motion.div>
    </>
  );
};

// BottomContent Component
const BottomContent = ({ project, controls }: any) => {
  return (
    <>
      <motion.div
        className={styles.bottomLeft}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        custom={4}
        whileHover="hover"
      >
        <div className={contentStyles.bottomLeftContent}>
          {project.projectTech.split(" ").map((tech: string, index: number) => (
            <div key={index} className={contentStyles.tag}>
              <h3>{tech}</h3>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className={styles.bottomMiddle}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        custom={5}
        whileHover="hover"
      >
        <div
          className={contentStyles.bottomRightContent}
          style={{ backgroundImage: `url(${project.img1})` }}
        ></div>
      </motion.div>
      <motion.div
        className={styles.bottomRight}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        custom={6}
        whileHover="hover"
      >
        <div
          className={contentStyles.bottomRightContent}
          style={{ backgroundImage: `url(${project.img2})` }}
        ></div>
      </motion.div>
    </>
  );
};

// Main Project Component
const Project = ({ project }: any) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className={styles.frame} ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className={styles.leftSection}
      >
        <LeftContent project={project} controls={controls} />
      </motion.div>
      <motion.div className={styles.rightSection}>
        <TopContent project={project} controls={controls} />
        <BottomContent project={project} controls={controls} />
      </motion.div>
    </div>
  );
};

export default Project;
