'use client';
import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import styles from '@/styles/project/displayed/kevfm.module.scss';
import {containerVariants, circleVariants, titleVariants, descriptionTextVariants, cornerVariants} from '@/utils/framer';
import {projectData} from '@/utils/data/projectdata';

const KevFm = () => {
  const project = projectData[3];
  const [ref, inView] = useInView({triggerOnce: true});
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div ref={ref} className={styles.frame} initial='hidden' animate={controls} variants={containerVariants} transition={{duration: 0.6}}>
      <motion.div className={styles.leftSection} variants={containerVariants} transition={{duration: 0.6}}>
        <motion.div className={styles.circleContainer} initial='hidden' animate='visible' variants={circleVariants}>
          <div className={styles.circle}></div>
        </motion.div>
        <motion.div className={styles.infoContainer}>
          <p>{project.projectTag}</p>
        </motion.div>
        <motion.div className={styles.bottom} variants={titleVariants} initial='hidden' animate='visible' transition={{delay: 0.4}}>
          <h1 className={styles.kevFm}>{project.projectTitle}</h1>
        </motion.div>
      </motion.div>

      <motion.div className={styles.rightSection} variants={containerVariants} transition={{duration: 0.6}}>
        <motion.div className={styles.topSection} variants={descriptionTextVariants} initial='hidden' animate='visible' transition={{delay: 0.6}}>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.about}>About</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
          <div className={styles.imageCenterContainer}></div>
        </motion.div>
        <motion.div className={styles.bottomSection} initial='hidden' animate='visible' variants={cornerVariants} transition={{delay: 0.8}}>
          <div className={styles.projectContainer}>
            <div className={styles.corner}></div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default KevFm;
