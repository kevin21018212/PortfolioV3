"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/project/displayed/project.module.scss";
import {
  containerVariants,
  slideTextVariant,
  cornerVariant,
  textAnimation,
  boxVariants,
} from "@/utils/framer";
import { projectData } from "@/utils/data/projectdata";
import { FaArrowAltCircleRight, FaArrowAltCircleUp } from "react-icons/fa";

const Project = () => {
  const project = projectData[3];
  const [ref, inView] = useInView({ triggerOnce: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={styles.frame}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={styles.leftSection}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
      ></motion.div>

      <motion.div
        className={styles.rightSection}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.topSection}
          variants={slideTextVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <div className={styles.left}>
            <div className={styles.topLeftContent}>
              <h2 className={styles.about}>About</h2>
              <p className={styles.description}>{project.description}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.topRightContent}>
              <FaArrowAltCircleUp
                onClick={() => window.open(project.linkUrl, "_blank")}
                size={"50%"}
                color="#F0F0F0"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.bottomSection}
          initial="hidden"
          animate="visible"
          variants={cornerVariant}
          transition={{ delay: 0.8 }}
        >
          <div className={styles.bottomSection}>
            <div className={styles.left}>
              <div className={styles.bottomLeftContent}>
                {project.projectTech.split(" ").map((tech, index) => (
                  <motion.div
                    key={index}
                    className={styles.tag}
                    initial="hidden"
                    animate="visible"
                    variants={textAnimation}
                  >
                    <h3>{tech}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div
              className={styles.bottomRightContent}
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            ></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
