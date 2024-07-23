import React from "react";
import styles from "@/styles/project/project.module.scss";
import { Project } from "@/utils/data/dataType";

type DescriptionProps = {
  data: Project[];
  selectedProject: number | null;
};

const Descriptions = ({ data, selectedProject }: DescriptionProps) => {
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
