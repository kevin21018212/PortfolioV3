"use client";
import { useState } from "react";
import styles from "@/styles/project/project.module.css";
import Descriptions from "./description";
import Titles from "./title";
import { projectData } from "@/utils/data/projectdata";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className={styles.container}>
      <Titles data={projectData} setSelectedProject={setSelectedProject} />
      <Descriptions data={projectData} selectedProject={selectedProject} />
    </div>
  );
};
export default Projects;
