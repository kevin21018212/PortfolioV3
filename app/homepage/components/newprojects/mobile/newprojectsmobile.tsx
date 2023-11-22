"use client";
import { animate, motion } from "framer-motion";
import { projects } from "@/app/data/projectdata";
import styles from "../../../css/projects/project.module.css";
import ProjectInfoMobile from "./projectinfomobile";

const NewProjectsMobile = () => {
  return (
    <div className={styles.projectsComponent}>
      {projects.map((project) => (
        <motion.div>
          <ProjectInfoMobile key={project.id} projectData={project} />
        </motion.div>
      ))}
    </div>
  );
};

export default NewProjectsMobile;
