import React from "react";
import Project from "./project";
import { projectData } from "../data/projectdata";
import Projects from "./works/project";
import styles from "./project.module.css";
const ProjectsPage = () => {
  return (
    <div>
      <div className={styles.spacer}></div>

      <Projects />
      <div className={styles.spacer}></div>
      <div className={styles.spacer}></div>
    </div>
  );
};

export default ProjectsPage;
