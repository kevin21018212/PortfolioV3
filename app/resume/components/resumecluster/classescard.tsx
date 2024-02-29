import { motion } from "framer-motion";
import styles from "../../css/resumecluster/classescard.module.css";
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
        <h6>{category.name}</h6>
        {category.courses.map((course, index) => (
          <p key={index}>{course}</p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ClassesCard;
