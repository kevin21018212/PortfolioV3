"use client";
import { useState } from "react";
import styles from "@/styles/project/project.module.scss";
import Descriptions from "./description";
import Titles from "./title";
import { projectData } from "@/utils/data/projectdata";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <Titles data={projectData} setSelectedProject={setSelectedProject} />
      <Descriptions data={projectData} selectedProject={selectedProject} />
    </div>
  );
};

export default Projects;
