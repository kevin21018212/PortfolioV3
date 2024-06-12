import { motion } from "framer-motion";
import styles from "@/app/styles/resume/resumecluster/classescard.module.scss";
import { descriptionVariants } from "@/app/data/motion/animations";
import { ClassesCardProps } from "@/app/data/types";

const ClassesCard = ({ category }: ClassesCardProps) => {
  return (
    <motion.div className={styles.card}>
      <motion.div
        className={styles.description}
        variants={descriptionVariants}
        initial="hidden"
        whileHover="visible"
      >
        <h4>{category.name}</h4>
        {category.courses.map((course, index) => (
          <p key={index}>{course}</p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ClassesCard;
