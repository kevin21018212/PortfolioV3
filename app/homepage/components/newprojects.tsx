"use client";

import { animate, motion } from "framer-motion";
import { useState } from "react";
import styles from "../css/project.module.css";
import ProjectInfo from "./projectinfo";
import { circles } from "@/app/data/smallData";
import { Project } from "@/app/data/types";
import SpacerContainer from "@/app/global/spacer";

const NewProjects = () => {
  const [selectedCircle, setSelectedCircle] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<any>(null);

  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const handleToggleProject = () => {
    if (isProjectOpen) {
      handleClose();
    } else {
      handleOpen();
    }
    setIsProjectOpen(!isProjectOpen);
  };

  const handleCircleClick = (circleId: string) => {
    const selectedProject = projectData.find(
      (project: Project) => project.id === circleId
    );
    setProjectData(selectedProject || null);
  };

  const handleOpen = () => {
    animate(`.${styles.projectsContainer}`, { height: "65vh", opacity: 1 });
    animate(`.${styles.projectsComponent}`, {
      transform: "translateY(-65vh)",
    });
  };

  const handleClose = () => {
    animate(`.${styles.projectsContainer}`, { height: "0vh", opacity: 0 });
    animate(`.${styles.projectsComponent}`, { transform: "translateY(0vh)" });
  };

  return (
    <div className={styles.projectsComponent}>
      <SpacerContainer
        title={"NewProjects"}
        tag={""}
        handleToggleProject={handleToggleProject}
        isProjectOpen={isProjectOpen}
      />
      <motion.div className={styles.projectsContainer}>
        <div className={styles.circlesContainer}>
          {circles.map((circle) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              key={circle.id}
              className={`${styles.circle} ${
                selectedCircle === circle.id ? styles.selected : ""
              }`}
              id={circle.id}
              onClick={() => handleCircleClick(circle.id)}
            ></motion.div>
          ))}
        </div>
        <ProjectInfo projectData={projectData} />
      </motion.div>
    </div>
  );
};

export default NewProjects;