import React from "react";
import styles from "./project.module.scss";

const Project = ({
  title,
  leftContent,
  rightContent,
  leftSize = "50%",
  rightSize = "50%",
}: any) => {
  return (
    <div className={styles.project}>
      <div className={styles.left} style={{ flex: leftSize }}>
        {leftContent}
      </div>
      <div className={styles.right} style={{ flex: rightSize }}>
        {rightContent}
      </div>
    </div>
  );
};

export default Project;
