import { motion } from "framer-motion";

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
            <h4>{title}</h4>
            <h5>{skillName}</h5>
            <p>{experience}</p>
          </div>
        </div>
      </GlareCard>
    </motion.div>
  );
};

export default SkillCard;
