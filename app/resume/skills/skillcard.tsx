import { motion } from "framer-motion";
import styles from "@/app/styles/resume/skills/skillcard.module.css";
import { getRandomGradient } from "@/app/data/functions";
import { SkillCardProps } from "@/app/data/types";

const SkillCard = ({ title, skillName, experience }: SkillCardProps) => {
  const cardStyle = {
    backgroundImage: getRandomGradient(),
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={styles.skillcardContainer}
      style={cardStyle}
    >
      <div className={styles.card}>
        <div className={styles.text}>
          <h5>{title}</h5>
          <h6>{skillName}</h6>
          <p>{experience}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
