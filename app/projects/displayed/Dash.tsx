import React from "react";
import styles from "@/styles/project/displayed/dash.module.scss";
import { projectData } from "@/utils/data/projectdata";

const Dash = () => {
  const project = projectData[1];
  return (
    <div className={styles.frame}>
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}></div>
        <div className={styles.titleContainer}>
          <h1 className={styles.dash}>{project.projectTitle}</h1>
          <h2 className={styles.taskTracking}>{project.projectTag}</h2>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.mainContent}>
          <div className={styles.mainContentLeft}>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{project.description}</p>
            </div>
            <div className={styles.tagContainer}>
              {project.projectTech.split(" ").map((tech, index) => (
                <div key={index} className={styles.tag}>
                  <h3>{tech}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.mainContentRight}>
            <div className={styles.top}>
              <div className={styles.symbolContainer}></div>
              <div className={styles.project001}>
                <h2>{project.projectNumber}</h2>
              </div>
            </div>
            <div className={styles.bottom}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
