import React from "react";
import styles from "@/app/styles/project/project.module.css";
import { Project } from "@/app/data/types";
import { projectData } from "@/app/data/projectdata";

type DescriptionProps = {
  data: any;
  selectedProject: any;
};

const Descriptions = ({ data, selectedProject }: DescriptionProps) => {
  const crop = (string: string, maxLength: number) => {
    return string.substring(0, maxLength);
  };

  return (
    <div className={styles.descriptions}>
      {data.map((project: Project, index: number) => {
        const { projectTitle, projectTag } = project;

        return (
          <div
            key={index}
            className={styles.description}
            style={{
              clipPath:
                selectedProject === index ? "inset(0 0 0)" : "inset(50% 0 50%)",
            }}
          >
            <div className={styles.left}>
              <h1>{projectTitle}</h1>
            </div>
            <div className={styles.right}>
              <h6>{projectTag}</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Descriptions;
