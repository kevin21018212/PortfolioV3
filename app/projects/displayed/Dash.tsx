"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import template from "@/styles/project/displayed/project.module.scss";
import { projectData } from "@/utils/data/projectdata";
import styles from "@/styles/project/displayed/dash.module.scss";
import contentStyles from "@/styles/project/displayed/projectContent.module.scss";
import {
  containerVariants,
  slideTextVariant,
  cornerVariant,
  textAnimation,
} from "@/utils/framer";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Dash = () => {
  const project = projectData[1];

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
      className={template.frame}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={template.leftSection}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        ></motion.div>
        <motion.div
          className={styles.titleContainer}
          variants={containerVariants}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className={styles.dash}>{project.projectTitle}</h1>
          <h2 className={styles.taskTracking}>{project.projectTag}</h2>
        </motion.div>
      </motion.div>

      <motion.div
        className={template.rightSection}
        variants={containerVariants}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={template.topSection}
          variants={slideTextVariant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <div className={template.left}>
            <div className={contentStyles.topLeftContent}>
              <h2 className={contentStyles.about}>About</h2>
              <p className={contentStyles.description}>{project.description}</p>
            </div>
          </div>
          <div className={template.right}>
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
          className={template.bottomSection}
          initial="hidden"
          animate="visible"
          variants={cornerVariant}
          transition={{ delay: 0.8 }}
        >
          <div className={template.bottomSection}>
            <div className={styles.left}></div>

            <div className={template.right}>
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

export default Dash;
