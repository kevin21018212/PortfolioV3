import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import styles from "@/styles/resume/skills/skillcard.module.scss";
import { SkillCardProps } from "@/utils/data/types";
import { getRandomMeshGradient } from "@/utils/functions";

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.5,
      ease: "easeInOut",
      delay: i * 0.1, // Adjusted delay for faster staggered animation
    },
  }),
};

const SkillCard = ({ title, skillName, experience, index }: SkillCardProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const cardStyle = {
    backgroundImage: getRandomMeshGradient(),
  };

  return (
    <motion.div
      className={styles.skillcardContainer}
      style={cardStyle}
      variants={cardVariants}
      custom={index} // Pass the index to the variants
      initial="hidden"
      animate={controls}
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
