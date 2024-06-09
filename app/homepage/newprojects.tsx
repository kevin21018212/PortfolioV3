"use client";
import { animate, motion } from "framer-motion";
import { useState } from "react";
import styles from "@/app/styles/homepage/project.module.scss";
import ProjectInfo from "./projectinfo";
import { circles } from "@/app/data/smallData";
import { Project } from "@/app/data/types";
import SpacerContainer from "@/app/global/spacer";
import { projectData } from "@/app/data/projectdata";

const NewProjects = () => {
  const [selectedCircle, setSelectedCircle] = useState<number>(0);
  console.log(selectedCircle);

  const [useprojectData, setProjectData] = useState<Project>();

  const [isProjectOpen, setIsProjectOpen] = useState(false);

  const handleToggleProject = () => {
    if (isProjectOpen) {
      handleClose();
    } else {
      handleOpen();
    }
    setIsProjectOpen(!isProjectOpen);
  };

  const handleCircleClick = (circleId: number) => {
    setSelectedCircle(circleId); // Update the selected circle
    if (circleId != null || circleId !== 0) {
      const selectedProject = projectData.find(
        (project) => project.id === circleId
      ) as Project;
      console.log(selectedProject);
      setProjectData(selectedProject);
    }
  };

  const handleOpen = () => {
    animate(`.${styles.projectsContainer}`, { height: "50vh", opacity: 1 });
    animate(`.${styles.projectsComponent}`, {
      transform: "translateY(-50vh)",
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
              onClick={() => {
                handleCircleClick(circle.id);
              }}
            ></motion.div>
          ))}
        </div>
        <div className={styles.projectInfoContainer}>
          <ProjectInfo projectData={useprojectData} />
        </div>
      </motion.div>
    </div>
  );
};

export default NewProjects;
