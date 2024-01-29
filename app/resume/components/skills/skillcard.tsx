import { motion } from "framer-motion";
import styles from "../../css/skills/skillcard.module.css";

interface SkillCardProps {
  title: string;
  skillName: string;
  experience: string;
  backgroundImageUrl: string | null;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skillName,
  experience,
  backgroundImageUrl,
}: SkillCardProps) => {
  const cardStyle = {
    backgroundImage: backgroundImageUrl
      ? `url(${backgroundImageUrl})`
      : "linear-gradient(45deg, #ffd700, #ff4500, #ff1493)",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 50 }}
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
