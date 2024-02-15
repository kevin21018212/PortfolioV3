import React from "react";
import styles from "./project.module.css";
import { Project } from "../data/types";

const Project = (data: { imageUrl: any }) => {
  const imageStyle = data.imageUrl
    ? { backgroundImage: `url(${data.imageUrl})` }
    : undefined;

  return <div className="pageContainer"></div>;
};

export default Project;
