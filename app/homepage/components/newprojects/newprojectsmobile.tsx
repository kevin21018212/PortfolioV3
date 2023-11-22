"use client";
import { animate, motion } from "framer-motion";
import { projects } from "@/app/data/projectdata";
import styles from "../../css/projects/project.module.css";
import ProjectInfoMobile from "./projectinfomobile";

const NewProjectsMobile = () => {
  return (
    <div className={styles.projectsComponent}>
      <div className={styles.spacerContainer}>
        <p className="t1">New Projects</p>
        <button className={`${styles.toggleButton} ${styles.upArrow}`}></button>
      </div>

      {projects.map((project) => (
        <motion.div>
          <ProjectInfoMobile key={project.id} projectData={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default NewProjectsMobile;
