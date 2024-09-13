// ResumeClasses.jsx

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/resume/resumecluster/classes.module.scss";
import ClassesCard from "./classescard";
import courseCategories from "@/utils/data/coursecategories";
import { containerVariants, textAnimation } from "@/utils/framer";

const ResumeClasses = () => {
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
    <motion.div
      ref={ref}
      className={styles.classescontainer}
      initial="hidden"
      animate={controls}
      exit="hidden"
      variants={containerVariants}
    >
      <motion.div className={styles.classestitle} variants={textAnimation}>
        <h1>CLASSES</h1>
      </motion.div>
      <div className={styles.cardcontainer}>
        {courseCategories.map((category, index) => (
          <ClassesCard key={index} category={category} controls={controls} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default ResumeClasses;
