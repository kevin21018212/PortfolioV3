import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/homepage/projectmobile.module.scss";
import { projectData } from "@/utils/data/projectdata";
import SpacerContainer from "@/app/global/spacer";
import ScrambleText from "@/utils/animations/Scramble";
import Paragraph from "@/utils/animations/Paragraph";

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
              <div style={{ height: "40vh" }}></div>
              <Paragraph paragraph={project.description} />
              <div style={{ height: "40vh" }}></div>

              <div className={styles.info}>
                <motion.div
                  whileHover={{ scale: 1.1, borderRadius: "0px" }}
                  className={styles.image}
                ></motion.div>
                <div className={styles.about}>
                  <h5>
                    <ScrambleText>{project.projectTech}</ScrambleText>
                  </h5>
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
