import { motion } from "framer-motion";
import styles from "@/app/styles/resume/resumecluster/classes.module.css";
import ClassesCard from "./classescard";
import courseCategories from "@/app/data/coursecategories";

const ResumeClasses = () => {
  return (
    <div className={styles.classescontainer}>
      <motion.div className={styles.classestitle}>
        <h1>CLASSES</h1>
      </motion.div>
      <div className={styles.cardcontainer}>
        {courseCategories.map((category, index) => (
          <ClassesCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ResumeClasses;
