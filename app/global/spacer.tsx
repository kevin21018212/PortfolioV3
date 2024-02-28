import React from "react";
import styles from "./spacer.module.css";
import { spacerContainerProps } from "../data/types";

const SpacerContainer = ({
  title,
  tag,
  handleToggleProject = null,
  isProjectOpen = false,
}: spacerContainerProps) => {
  if (handleToggleProject != null) {
    return (
      <div className={styles.spacerContainerButton}>
        <h1 className={styles.projectNumber}>title</h1>
        <button
          onClick={handleToggleProject}
          className={`${styles.toggleButton} ${
            isProjectOpen ? styles.upArrow : styles.downArrow
          }`}
        ></button>
      </div>
    );
  }
  if (tag) {
    return (
      <div className={styles.spacerContainer}>
        <h1>{title}</h1>
        <h3>{tag}</h3>
      </div>
    );
  }

  return (
    <div className={styles.spacerContainerSimple}>
      <h1>{title}</h1>
    </div>
  );
};

export default SpacerContainer;
