import React from "react";
import styles from "../../css/resumecluster/work.module.css";
import AboutDisplay from "./about";
import { jobData } from "@/app/data/smallData";
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
                  <h6>{job.title}</h6>
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
