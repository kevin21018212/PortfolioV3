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
        <motion.div
          className={styles.workinfo}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            className={styles.workimg}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className={styles.worktext}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <SpacerContainer
                title={"Work"}
                tag={null}
                handleToggleProject={null}
                isProjectOpen={false}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className={styles.workbox}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              className={styles.workdisplay}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delayChildren: 0.3,
                staggerChildren: 0.2,
              }}
            >
              {jobData.map((job, index) => (
                <motion.div
                  key={index}
                  className={styles.jobtext}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h4>{job.title}</h4>
                  {job.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.aboutdisplay}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AboutDisplay />
        </motion.div>
      </div>
    </>
  );
};

export default ResumeWork;
