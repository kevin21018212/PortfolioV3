import React from "react";

import styles from "./project.module.scss";

import Dash from "./displayed/Dash";
import Projects from "./nav/project";
import KevFm from "./displayed/KevFm";

const ProjectsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.featuredProject}></div>
      <div className={styles.nav}>
        <Projects />
      </div>
      <div className={styles.projects}>
        <div className={styles.projectContainer}>
          <Dash />
        </div>
        <div className={styles.projectContainer}>
          <KevFm />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
