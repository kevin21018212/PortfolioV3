"use client";

import styles from "./resume.module.scss";
import ResumeClasses from "./resumecluster/classes";
import ResumeWork from "./resumecluster/work";
import SkillSlider from "./skills/skillslider";

const ResumePage = () => {
  return (
    <div className={styles.resumeContainer}>
      <Header />
      <div className={styles.skillSlider}>
        <SkillSlider />
      </div>
      <div className={styles.work}>
        <ResumeWork />
      </div>
      <div className={styles.classes}>
        <ResumeClasses />
      </div>
    </div>
  );
};

const Header = () => (
  <div className={styles.headerContainer}>
    <Heading />
    <SubHeading />
  </div>
);

const Heading = () => (
  <div className={styles.heading}>
    <h2>
      Coding is only a tool of expression. Beauty can only be found in the art
    </h2>
  </div>
);

const SubHeading = () => (
  <div className={styles.subHeading}>
    <h4>
      Below you can see some of my tools or
      <strong className={styles.simpleGradient}> download resume </strong>
      for a more formal look at my talents
    </h4>
  </div>
);

export default ResumePage;
