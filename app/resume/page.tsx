"use client";

import ResumeClasses from "./components/resumecluster/classes";
import ResumeWork from "./components/resumecluster/work";
import SkillSlider from "./components/skills/skillslider";
import styles from "./resume.module.css";

const ResumePage = () => {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.headerContainer}>
        <div>
          <h2>ALWAYS LEARNING, ALWAYS MAKING, ALWAYS CREATING</h2>
          <h4>
            I am always looking for{" "}
            <strong className="textGradient">new opportinunites</strong>
          </h4>
          <p></p>
        </div>
      </div>
      );
      <SkillSlider />
      <div className={styles.clustercontainer}>
        <ResumeWork />
        <ResumeClasses />
      </div>
    </div>
  );
};
export default ResumePage;
