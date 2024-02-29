"use client";

import styles from "../css/landing.module.css";

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.liquidGradient}></div>
      <div className={styles.textBox}></div>
      <div className={styles.infoBox}></div>
      <div className={styles.symbolBox}></div>
    </div>
  );
};

export default Landing;
