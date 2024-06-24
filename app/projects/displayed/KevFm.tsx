import React from "react";
import styles from "@/styles/project/displayed/kevfm.module.scss";

const KevFm = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.leftSection}>
        <div className={styles.imageContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.circle}></div>
          </div>

          <div className={styles.bottom}>
            <h1 className={styles.kevFm}>Kev.FM</h1>
          </div>
          <div className={styles.image}></div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.topSection}>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.about}>About</h2>
            <p className={styles.description}>
              Welcome to the heart of Kev.FM, where the magic of data transforms
              into art. Discover a world of soundscapes and visual narratives
              that merge seamlessly. Explore a unique fusion of technology and
              creativity, where each piece of data is a brushstroke, and each
              interaction is a musical journey. Join us on this sonic adventure!
            </p>
          </div>
          <div className={styles.imageCenterContainer}></div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.projectContainer}>
            <div className={styles.corner}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KevFm;
