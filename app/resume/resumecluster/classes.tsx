import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "@/styles/resume/resumecluster/classes.module.scss";
import ClassesCard from "./classescard";
import courseCategories from "@/utils/data/coursecategories";
import { containerVariants } from "@/utils/framer";

const ResumeClasses = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
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
      <motion.div
        className={styles.classestitle}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>CLASSES</h1>
      </motion.div>
      <motion.div
        className={styles.cardcontainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {courseCategories.map((category, index) => (
          <ClassesCard key={index} category={category} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ResumeClasses;
