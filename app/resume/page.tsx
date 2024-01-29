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
          <p className="t2">
            Displayed here,is a slice of what I am capable of
          </p>
          <p className="t4">
            I am always looking for{" "}
            <strong className={styles.textGradient}>new opportinunites</strong>
          </p>
          <p className="t5">Text Version</p>
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
