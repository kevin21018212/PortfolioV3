"use client";
import { useState } from "react";
import { useAnimation, motion } from "framer-motion";
import styles from "../css/skillcard.module.css";

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

  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const flipCard = async () => {
    setIsFlipped(!isFlipped);
    await controls.start({ rotateY: isFlipped ? 0 : 180 });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 50 }}
      className={styles.skillcardContainer}
      style={cardStyle}
      initial={{ rotateY: 0 }}
      animate={controls}
    >
      <div className={styles.cardfront}>
        <div className={styles.text}>
          <p className="s">{title}</p>
          <p className="m">{skillName}</p>
          <p className="s">{experience}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
