"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../css/projects/projectinfomobile.module.css";

type ProjectData = {
  id: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  middleMiddle: string;
  bottomMiddle: string;
};

const ProjectInfoMobile = ({ projectData }: { projectData: ProjectData }) => {
  return (
    <div className={styles.projectsContent}>
      {projectData && (
        <div>
          <div className={styles.title}>
            <h1> {projectData.middleRight}</h1>
            <p>{projectData.bottomRight}</p>
          </div>
          <div className={styles.description}>
            <div className={styles.text}>
              <p> {projectData.middleMiddle}</p>
            </div>
            <div className={styles.info}>
              <div className={styles.image}></div>
              <div className={styles.about}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectInfoMobile;
