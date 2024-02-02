"use client";

import styles from "../css/landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.top}>
        <div className={styles.topText}>
          <h1>DEVELOPER</h1>
        </div>
        <div className={styles.topImage} />
      </div>
      <div className={styles.middle}>
        <div className={styles.middleTextLeft}>
          <h1>WEB</h1>
        </div>
        <div className={styles.middleImage} />
        <div className={styles.middleTextRight}>
          <h1>Designer</h1>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomImage} />
        <div className={styles.bottomText}>
          <h1>Creative</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
