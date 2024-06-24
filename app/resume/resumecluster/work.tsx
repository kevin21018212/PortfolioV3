import React from "react";
import styles from "@/styles/resume/resumecluster/work.module.scss";
import AboutDisplay from "./about";
import { jobData } from "@/utils/data/smallData";
import SpacerContainer from "@/app/global/spacer";
import { motion } from "framer-motion";

const ResumeWork = () => {
  return (
    <>
      <div className={styles.workcontainer}>
        <motion.div className={styles.workinfo}>
          <motion.div className={styles.workimg}>
            <motion.div className={styles.worktext}>
              <SpacerContainer
                title={"Work"}
                tag={null}
                handleToggleProject={null}
                isProjectOpen={false}
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.workbox}>
            <motion.div className={styles.workdisplay}>
              {jobData.map((job, index) => (
                <div key={index} className={styles.jobtext}>
                  <h5>{job.title}</h5>
                  {job.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <div className={styles.aboutdisplay}>
          <AboutDisplay />
        </div>
      </div>
    </>
  );
};

export default ResumeWork;
