"use client";
import ResumeClasses from "./components/resumecluster/classes";
import ResumeWork from "./components/resumecluster/work";
import SkillSlider from "./components/skills/skillslider";
import styles from "./resume.module.css";

const ResumePage = () => {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.heading}>
          <h2>
            Coding is only a tool of expression. Beauty can only be found in the
            art
          </h2>
        </div>
        <div className={styles.subHeading}>
          <h4>
            Below you can see some of my tools or
            <strong className="textGradient"> download resume </strong>
            for a more formal look at my talents
          </h4>
        </div>
      </div>
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
export default ResumePage;
