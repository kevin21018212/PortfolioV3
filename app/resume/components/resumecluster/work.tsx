import React from "react";
import styles from "../../css/resumecluster/work.module.css";
import AboutDisplay from "./about";

const ResumeWork = () => {
  return (
    <>
      <div className={styles.workcontainer}>
        <div className={styles.workimg}>
          <div className={styles.worktext}>
            <p className="t1">WORK EXPERIENCE</p>
          </div>
        </div>
        <div className={styles.workbox}>
          <div className={styles.workdisplay}>
            {[
              {
                title: "John Deere | 2022 - Present",
                description: [
                  "Year-round developer internship at John Deere.",
                  "Full-stack development on multiple company apps.",
                  "Technologies used: AWS, APIs, Databases, Next.js.",
                ],
              },
              {
                title: "Acacia Fraternity Web Dev | 2023 - Present",
                description: [
                  "Web development and general maintenance.",
                  "Technologies used: Next.js, Tailwind, Framer, Firebase Hosting.",
                ],
              },
              {
                title: "Cabot Corporation | 2021 - 2022",
                description: [
                  "General internship focusing on analyzing large datasets.",
                  "Specialized in loss/spill prevention, VBA integration.",
                ],
              },
            ].map((job, index) => (
              <div key={index} className={styles.jobtext}>
                <p className="t5">{job.title}</p>
                {job.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.aboutdisplay}>
            <AboutDisplay />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeWork;
