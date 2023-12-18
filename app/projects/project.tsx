import React from "react";
import styles from "./project.module.css";

interface ProjectData {
  title: string;
  date: string;
  description: string;
  tags: string[];
  link: string | null;
  image: string | null; 

const Project = (data: ProjectData) => {
  const imageStyle = data.image
    ? { backgroundImage: `url(${data.image})` }
    : undefined;

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleSection}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.line} />
        <div className={styles.more}>
          <div className={styles.date}>{data.date}</div>
          <div className={styles.tags}>{data.tags}</div>
        </div>
      </div>
      <div className={styles.imageSection} style={imageStyle} />
      <div className={styles.infoSection}>
        <div className={styles.description}>{data.description}</div>
        <div className={styles.link}>{data.link}</div>
      </div>
    </div>
  );
};

export default Project;
