import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from "@/styles/resume/skills/skillcard.module.scss";
import { SkillCardProps } from "@/utils/data/dataType";
import { getRandomMeshGradient } from "@/utils/functions";

const SkillCard = ({ title, skillName, experience, index }: SkillCardProps) => {
  const cardStyle = {
    backgroundImage: getRandomMeshGradient(),
  };

  return (
    <motion.div
      className={styles.skillcardContainer}
      style={cardStyle}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95, rotate: -1 }}
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
