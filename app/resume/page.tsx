"use client";

import { useIsMobile } from "@/utils/functions";
import styles from "./resume.module.scss";
import ResumeClasses from "./resumecluster/classes";
import ResumeWork from "./resumecluster/work";
import WorkMobile from "./resumecluster/workMobile";
import SkillSlider from "./skills/skillslider";
import { motion } from "framer-motion";

// Animation variants for the main container and its children
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ResumePage = () => {
  const isMobile = useIsMobile();

  return (
    <motion.div className={styles.resumeContainer} initial="hidden" whileInView="visible" variants={containerVariants}>
      <Header />
      <motion.div className={styles.skillSlider}>
        <SkillSlider />
      </motion.div>
      <motion.div className={styles.work}>{isMobile ? <WorkMobile /> : <ResumeWork />}</motion.div>
      <motion.div className={styles.classes}>
        <ResumeClasses />
      </motion.div>
    </motion.div>
  );
};

const Header = () => (
  <motion.div className={styles.headerContainer} initial="hidden" whileInView="visible" variants={containerVariants}>
    <Heading />
    <SubHeading />
  </motion.div>
);

const Heading = () => (
  <motion.div className={styles.heading} variants={childVariants}>
    <h2>Coding is only a tool of expression. Beauty can only be found in the art</h2>
  </motion.div>
);

const SubHeading = () => (
  <motion.div className={styles.subHeading} variants={childVariants}>
    <h3>
      Below you can see some of my tools or
      <motion.a
        href="/resume.pdf"
        className={styles.simpleGradient}
        whileHover={{
          scale: 1.05,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },

          animation: "gradientAnimation 3s ease infinite",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        download resume
      </motion.a>
      for a more formal look at my talents
    </h3>
  </motion.div>
);

export default ResumePage;
