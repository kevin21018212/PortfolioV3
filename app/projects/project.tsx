import React from "react";
import styles from "./project.module.css";

interface ProjectData {
  title: string;
  date: string;
  description: string;
  tags: string[];
  link: string | null;
  image: string | null;
}
const Project = (data: ProjectData) => {
  const imageStyle = data.image
    ? { backgroundImage: `url(${data.image})` }
    : undefined;

  return <div className="pageContainer"></div>;
};

export default Project;
