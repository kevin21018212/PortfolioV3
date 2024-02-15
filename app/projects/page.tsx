import React from "react";
import Project from "./project";
import { fakeData } from "../data/smallData";

const ProjectsPage = () => {
  return (
    <div>
      {fakeData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
