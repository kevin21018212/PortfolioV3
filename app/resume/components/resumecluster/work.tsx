import React from "react";
import styles from "../../css/resumecluster/work.module.css";
import AboutDisplay from "./about";
import { jobData } from "@/app/data/smallData";
import SpacerContainer from "@/app/global/spacer";

const ResumeWork = () => {
  return (
    <>
      <div className={styles.workcontainer}>
        <div className={styles.workinfo}>
          <div className={styles.workimg}>
            <div className={styles.worktext}>
              <SpacerContainer
                title={"Work"}
                tag={null}
                handleToggleProject={null}
                isProjectOpen={false}
              />
            </div>
          </div>
          <div className={styles.workbox}>
            <div className={styles.workdisplay}>
              {jobData.map((job, index) => (
                <div key={index} className={styles.jobtext}>
                  <h6>{job.title}</h6>
                  {job.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.aboutdisplay}>
          <AboutDisplay />
        </div>
      </div>
    </>
  );
};

export default ResumeWork;
