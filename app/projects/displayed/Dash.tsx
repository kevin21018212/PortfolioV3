'use client';
import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import styles from '@/styles/project/displayed/dash.module.scss';
import {projectData} from '@/utils/data/projectdata';
import {bounceVariants, containerVariants, textAnimation} from '@/utils/framer';
import {FaHourglassHalf, FaUserCircle} from 'react-icons/fa';

const Dash = () => {
  const project = projectData[1];

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
    <motion.div ref={ref} className={styles.frame} initial='hidden' animate={controls} variants={containerVariants} transition={{duration: 1}}>
      <motion.div className={styles.leftSection} variants={containerVariants} transition={{duration: 0.6}}>
        <motion.div
          className={styles.imageContainer}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2, duration: 0.6}}></motion.div>
        <motion.div className={styles.titleContainer} variants={containerVariants} transition={{delay: 0.4, duration: 0.6}}>
          <h1 className={styles.dash}>{project.projectTitle}</h1>
          <h2 className={styles.taskTracking}>{project.projectTag}</h2>
        </motion.div>
      </motion.div>
      <motion.div className={styles.rightSection} variants={containerVariants} transition={{duration: 0.6}}>
        <motion.div className={styles.mainContent} variants={containerVariants} transition={{duration: 0.6}}>
          <motion.div className={styles.mainContentLeft} variants={bounceVariants} transition={{delay: 0.2, duration: 0.6}}>
            <div className={styles.info}>
              <motion.div
                className={styles.descriptionContainer}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration: 0.6}}>
                <p className={styles.description}>{project.description}</p>
              </motion.div>
              <motion.div className={styles.tagContainer} variants={bounceVariants} transition={{delay: 0.6, duration: 0.6}}>
                {project.projectTech.split(' ').map((tech, index) => (
                  <motion.div key={index} className={styles.tag} initial='hidden' animate='visible' variants={textAnimation}>
                    <h3>{tech}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className={styles.images}>
              <div className={styles.imageBox}></div>
              <div className={styles.imageBox}></div>
              <div className={styles.imageBox}></div>
            </div>
          </motion.div>
          <motion.div className={styles.mainContentRight} variants={containerVariants} transition={{duration: 0.6}}>
            <motion.div className={styles.top} variants={containerVariants} transition={{delay: 0.8, duration: 0.6}}>
              <div className={styles.symbolContainer}>
                <FaHourglassHalf size={100} color='#F0F0F0' />
                <FaUserCircle size={100} color='#F0F0F0' />
              </div>
              <div className={styles.project001}>
                <h2>{project.projectNumber}</h2>
              </div>
            </motion.div>
            <div className={styles.bottom}></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Dash;
