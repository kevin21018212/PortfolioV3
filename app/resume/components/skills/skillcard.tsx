import { motion } from "framer-motion";
import styles from "../../css/skills/skillcard.module.css";

interface SkillCardProps {
  title: string;
  skillName: string;
  experience: string;
}

const hexColorOptions = [
  "#f277B0", // Pink
  "#152FBF", // Purple
  "#2B76D9", // Blue
  "#0DF205", // Lime
  "#F26E50", // Salmon
];

const getRandomGradient = () => {
  const randomColor1 =
    hexColorOptions[Math.floor(Math.random() * hexColorOptions.length)];
  let randomColor2;
  do {
    randomColor2 =
      hexColorOptions[Math.floor(Math.random() * hexColorOptions.length)];
  } while (randomColor2 === randomColor1);

  return `linear-gradient(45deg, ${randomColor1}, ${randomColor2})`;
};

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skillName,
  experience,
}: SkillCardProps) => {
  const cardStyle = {
    backgroundImage: getRandomGradient(),
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
