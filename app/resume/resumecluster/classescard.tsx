import { motion } from "framer-motion";
import styles from "@/styles/resume/resumecluster/classescard.module.scss";
import { ClassesCardProps } from "@/utils/data/dataType";
import { textAnimation } from "@/utils/framer";

const descriptionVariants = {
  hidden: { height: "12.5%" },
  visible: { height: "90%" },
};

const contentVariants = {
  hidden: { display: "none" },
  visible: { display: "block" },
};

const ClassesCard = ({ category }: ClassesCardProps) => {
  return (
    <div className={styles.card}>
      <motion.div
        className={styles.description}
        initial="hidden"
        whileHover="visible"
        animate="hidden"
        variants={descriptionVariants}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.title}>
          <h4>{category.name}</h4>
        </div>
        <motion.div
          className={styles.content}
          variants={contentVariants}
          transition={{ duration: 1 }}
        >
          {category.courses.map((course, index) => (
            <motion.p key={index} variants={textAnimation}>
              {course}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClassesCard;
