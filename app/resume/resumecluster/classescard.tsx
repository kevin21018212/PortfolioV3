import React, { useState } from "react";
import styles from "@/styles/resume/resumecluster/classescard.module.scss";
import { ClassesCardProps } from "@/utils/data/dataType";
import { motion } from "framer-motion";
import { containerVariants } from "@/utils/framer";

const ClassesCard = ({ category, index, controls }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <motion.div
      className={styles.card}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      custom={index + 1}
    >
      <div
        className={`${styles.description} ${isExpanded ? styles.expanded : ""}`}
        onClick={toggleDescription}
        style={{
          height: isExpanded ? "90%" : "12.5%",
          transition: "height 0.3s ease",
        }}
      >
        <div className={styles.title}>
          <h4>{category.name}</h4>
        </div>
        <div className={styles.content}>
          {category.courses.map((course: any, idx: number) => (
            <p key={idx}>{course}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClassesCard;
