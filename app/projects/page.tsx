import React from "react";
import Project from "./project";
import { projectData } from "../data/projectdata";

const ProjectsPage = () => {
  return (
    <div>
      {projectData.map((project, index) => (
        <p>hi</p>
      ))}
    </div>
  );
};

export default ProjectsPage;
