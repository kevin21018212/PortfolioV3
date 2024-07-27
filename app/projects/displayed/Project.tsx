"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/project/displayed/project.module.scss";
import contentStyles from "@/styles/project/displayed/projectContent.module.scss";
import {
  containerVariants,
  slideTextVariant,
  cornerVariant,
  textAnimation,
  boxVariants,
} from "@/utils/framer";
import { FaArrowAltCircleRight, FaArrowAltCircleUp } from "react-icons/fa";

const Project = ({ project }: any) => {
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
      >
        <div className={contentStyles.leftContent}>
          <div className={contentStyles.topContent}>
            <h1>{project.projectTitle}</h1>
          </div>
          <div className={contentStyles.bottomContent}>
            <h4>00{project.id}</h4>
          </div>
        </div>
      </motion.div>

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
            <div className={contentStyles.topLeftContent}>
              <h2 className={contentStyles.about}>About</h2>
              <p className={contentStyles.description}>{project.description}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={contentStyles.topRightContent}>
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
            <div className={styles.one}>
              <div className={contentStyles.bottomLeftContent}>
                {project.projectTech
                  .split(" ")
                  .map((tech: string, index: number) => (
                    <motion.div
                      key={index}
                      className={contentStyles.tag}
                      initial="hidden"
                      animate="visible"
                      variants={textAnimation}
                    >
                      <h3>{tech}</h3>
                    </motion.div>
                  ))}
              </div>
            </div>{" "}
            <div className={styles.two}>
              <div
                className={contentStyles.bottomRightContent}
                style={{ backgroundImage: `url(${project.img1})` }}
              ></div>
            </div>
            <div className={styles.three}>
              <div
                className={contentStyles.bottomRightContent}
                style={{ backgroundImage: `url(${project.img2})` }}
              ></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
