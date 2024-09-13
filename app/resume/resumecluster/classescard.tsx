import React, { useState } from "react";
import styles from "@/styles/resume/resumecluster/classescard.module.scss";
import { ClassesCardProps } from "@/utils/data/dataType";

const ClassesCard = ({ category }: ClassesCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className={styles.card}>
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
          {category.courses.map((course, index) => (
            <p key={index}>{course}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
