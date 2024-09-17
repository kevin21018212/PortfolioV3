import React from "react";
import styles from "@/styles/resume/resumecluster/workMobile.module.scss";
import AboutDisplay from "./about";
import { jobData } from "@/utils/data/smallData";

import { motion } from "framer-motion";

const WorkMobile = () => {
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
                <h5>{job.title}</h5>
                {job.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                {job.project &&
                  job.project.map((project) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                      className={styles.project}
                    >
                      <h6>{project[0]}</h6>
                      <p>{project[1]}</p>
                      <p>{project[2]}</p>
                    </motion.div>
                  ))}
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className={styles.workimg}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
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

export default WorkMobile;
