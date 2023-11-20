"use client";
import { projects } from "@/app/data/projectdata";
import { animate, motion } from "framer-motion";
import { useState } from "react";
import styles from "../../css/projects/project.module.css";
import ProjectInfo from "./projectinfo";

const circles = [
  { id: "circle1", info: "Information for Circle 1" },
  { id: "circle2", info: "Information for Circle 2" },
  { id: "circle3", info: "Information for Circle 3" },
  { id: "circle4", info: "Information for Circle 4" },
  { id: "circle5", info: "Information for Circle 5" },
];

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
    const selectedProject = projects.find((project) => project.id === circleId);
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
      <div className={styles.spacerContainer}>
        <p className="t1">New Projects</p>
        <button
          onClick={handleToggleProject}
          className={`${styles.toggleButton} ${
            isProjectOpen ? styles.upArrow : styles.downArrow
          }`}
        ></button>
      </div>
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
