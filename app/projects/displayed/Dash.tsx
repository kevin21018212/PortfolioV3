import React from "react";
import styles from "@/styles/project/displayed/dash.module.scss";

const Dash = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}></div>
        <div className={styles.titleContainer}>
          <h1 className={styles.dash}>DASH</h1>
          <h2 className={styles.taskTracking}>Task Tracking</h2>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.mainContent}>
          <div className={styles.mainContentLeft}>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>
                Step into the world of Code Bounties, a platform where
                creativity, collaboration, and innovation come together. This
                digital realm is a playground for coding enthusiasts and problem
                solvers. Get ready to embark on exciting coding adventures,
                unlock achievements, and contribute to projects that make a
                difference.
              </p>
            </div>
            <div className={styles.tagContainer}>
              <div className={styles.tag}>
                <h3>Prisma</h3>
              </div>
              <div className={styles.tag}>
                <h3>Prisma</h3>
              </div>
              <div className={styles.tag}>
                <h3>Prisma</h3>
              </div>
            </div>
          </div>
          <div className={styles.mainContentRight}>
            <div className={styles.top}>
              <div className={styles.symbolContainer}></div>
              <div className={styles.project001}>
                <h2>Project 001</h2>
              </div>
            </div>

            <div className={styles.bottom}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
