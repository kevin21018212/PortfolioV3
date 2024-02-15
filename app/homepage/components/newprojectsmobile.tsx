import React from "react";
import { animate, motion } from "framer-motion";
import { projects } from "@/app/data/projectdata";
import styles from "../css/projectmobile.module.css";

type ProjectData = {
  id: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  middleMiddle: string;
  bottomMiddle: string;
};

const NewProjectsMobile = () => {
  return (
    <div className={styles.projectsComponent}>
      {projects.map((project) => (
        <motion.div key={project.id} className={styles.projectsContent}>
          <div>
            <div className="spacerContainer">
              <h1>{project.middleRight}</h1>
            </div>
            <div className={styles.description}>
              <div className={styles.text}>
                <p>{project.middleMiddle}</p>
              </div>
              <div className={styles.info}>
                <div className={styles.image}></div>
                <div className={styles.about}>
                  <h3>{project.bottomRight}</h3>
                  <p>{project.bottomMiddle}</p>
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
