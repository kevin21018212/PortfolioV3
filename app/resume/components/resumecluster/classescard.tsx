import { motion } from "framer-motion";
import styles from "../../css/resumecluster/classescard.module.css";

interface ClassesCardProps {
  category: {
    name: string;
    description: string;
    courses: string[];
  };
}

const ClassesCard: React.FC<ClassesCardProps> = ({ category }) => {
  const descriptionVariants = {
    hidden: { height: "10%" },
    visible: { height: "80%" },
  };

  return (
    <motion.div className={styles.card}>
      <motion.div
        className={styles.description}
        variants={descriptionVariants}
        initial="hidden"
        whileHover="visible"
      >
        <p className="t5">{category.name}</p>

        {category.courses.map((course, index) => (
          <p className="s" key={index}>
            {course}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ClassesCard;
