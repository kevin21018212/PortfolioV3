import { motion } from "framer-motion";
import styles from "@/styles/resume/resumecluster/classescard.module.scss";
import { ClassesCardProps } from "@/utils/data/types";

const ClassesCard = ({ category }: ClassesCardProps) => {
  return (
    <motion.div className={styles.card}>
      <motion.div
        className={styles.description}
        initial="hidden"
        whileHover="visible"
        variants={{
          hidden: { height: "15%" },
          visible: { height: "82.5%" },
        }}
      >
        <motion.div
          className={styles.title}
          variants={{
            hidden: { height: "100%" },
            visible: { height: "15%" },
          }}
        >
          <h5>{category.name}</h5>
        </motion.div>
        <motion.div
          className={styles.content}
          variants={{
            hidden: { height: "0%" },
            visible: { height: "85%" },
          }}
        >
          {category.courses.map((course, index) => (
            <p key={index}>{course}</p>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ClassesCard;
