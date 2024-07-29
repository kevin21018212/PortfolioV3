import { motion } from "framer-motion";
import { useEffect } from "react";
import styles from "@/styles/resume/skills/skillcard.module.scss";
import { SkillCardProps } from "@/utils/data/dataType";
import { getRandomMeshGradient } from "@/utils/functions";
import { GlareCard } from "@/utils/components/glareCard";

const SkillCard = ({ title, skillName, experience, index }: SkillCardProps) => {
  const cardStyle = {
    backgroundImage: getRandomMeshGradient(),
  };
  return (
    <motion.div className={styles.skillcardContainer}>
      <GlareCard className={styles.card}>
        <div className={styles.innerCard} style={cardStyle}>
          <div className={styles.text}>
            <h5>{title}</h5>
            <h6>{skillName}</h6>
            <p>{experience}</p>
          </div>
        </div>
      </GlareCard>
    </motion.div>
  );
};

export default SkillCard;
