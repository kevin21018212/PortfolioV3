import { motion } from "framer-motion";
import styles from "@/styles/resume/resumecluster/classescard.module.scss";
import { ClassesCardProps } from "@/utils/data/dataType";

const descriptionVariants = {
  hidden: { height: "15%" },
  visible: { height: "82.5%" },
};

const titleVariants = {
  hidden: { height: "100%" },
  visible: { height: "15%" },
};

const contentVariants = {
  hidden: { height: "0%" },
  visible: { height: "85%" },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ClassesCard = ({ category }: ClassesCardProps) => {
  return (
    <div className={styles.card}>
      <motion.div
        className={styles.description}
        initial="hidden"
        whileHover="visible"
        variants={descriptionVariants}
        transition={{ duration: 0.3 }}
      >
        <motion.div className={styles.title} variants={titleVariants}>
          <h5>{category.name}</h5>
        </motion.div>
        <motion.div className={styles.content} variants={contentVariants}>
          {category.courses.map((course, index) => (
            <motion.p key={index} variants={textVariants}>
              {course}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClassesCard;
