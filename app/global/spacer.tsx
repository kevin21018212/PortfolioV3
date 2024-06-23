import React from "react";
import styles from "./spacer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { spacerContainerProps } from "../utils/data/types";

const SpacerContainer = ({
  title,
  tag,
  handleToggleProject = null,
  isProjectOpen = false,
}: spacerContainerProps) => {
  if (handleToggleProject != null) {
    return (
      <div className={styles.spacerContainerButton}>
        <div className={styles.textContainer}>
          <h1 className={styles.projectNumber}>{title}</h1>
        </div>
        <div className={styles.toggleButtonContainer}>
          <button onClick={handleToggleProject} className={styles.toggleButton}>
            <FontAwesomeIcon
              icon={isProjectOpen ? faChevronUp : faChevronDown}
              size="8x"
            />
          </button>
        </div>
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
