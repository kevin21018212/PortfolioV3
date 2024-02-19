import React from "react";
import { animate, motion } from "framer-motion";

import styles from "../css/projectmobile.module.css";
import { Project } from "next/dist/build/swc";
import { projectData } from "@/app/data/projectdata";
import SpacerContainer from "@/app/global/spacer";

const NewProjectsMobile = () => {
  return (
    <div className={styles.projectsComponent}>
      {projectData.map((project) => (
        <motion.div key={project.id} className={styles.projectsContent}>
          <div>
            <SpacerContainer
              title={project.projectTitle}
              tag={project.projectTag}
              handleToggleProject={null}
              isProjectOpen={false}
            />
            <div className={styles.description}>
              <div className={styles.text}>
                <p>{project.description}</p>
              </div>
              <div className={styles.info}>
                <motion.div
                  whileHover={{ scale: 1.1, borderRadius: "0px" }}
                  className={styles.image}
                ></motion.div>
                <div className={styles.about}>
                  <h5>{project.projectTech}</h5>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NewProjectsMobile;
