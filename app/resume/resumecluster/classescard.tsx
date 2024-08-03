import { motion } from "framer-motion";
import styles from "@/styles/resume/resumecluster/classescard.module.scss";
import { ClassesCardProps } from "@/utils/data/dataType";
import { slideTextVariant } from "@/utils/framer";

const descriptionVariants = {
  hidden: { height: "12.5%" },
  visible: { height: "82.5%" },
};

const titleVariant = {
  hidden: { height: "100%" },
  visible: { height: "7.5%" },
};

const contentVariants = {
  hidden: { height: "0%" },
  visible: { height: "85%" },
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
        transition={{ duration: 0.3 }}
      >
        <motion.div className={styles.title} variants={titleVariant}>
          <h4>{category.name}</h4>
        </motion.div>
        <motion.div className={styles.content} variants={contentVariants}>
          {category.courses.map((course, index) => (
            <motion.p key={index} variants={slideTextVariant}>
              {course}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ClassesCard;
