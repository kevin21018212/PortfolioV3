'use client';

import {motion} from 'framer-motion';
import styles from '@/app/styles/homepage/landing.module.scss';
import {boxVariants} from '@/app/data/motion/animations';
import ShaderArtBackground from '../data/liquidgradient';

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.liquidGradient}></div>

      <div className={styles.textBox}>
        <h1>Developer</h1>
        <h1>Programmer</h1>
        <h1>Designer</h1>
      </div>

      {/* Animate infoBox */}

      <motion.div
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        className={styles.symbolBox}></motion.div>

      {/* Animate symbolBox */}

      <motion.div
        className={styles.infoBox}
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}></motion.div>
    </div>
  );
};

export default Landing;
