import React from "react";
import styles from "@/styles/project/updateSection.module.scss";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { boxVariants, staggerDivVariant } from "@/utils/framer";
import { Commit } from "@/utils/data/dataType";

interface GitHubActivityProps {
  commits: Commit[];
}

const GitHubActivity: React.FC<GitHubActivityProps> = ({ commits }) => {
  return (
    <div className={styles.updateSection}>
      {commits.map((commit, index) => (
        <motion.div
          key={index}
          className={styles.commitCard}
          variants={staggerDivVariant}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <div className={styles.cardTop}>
            <h3>{commit.repoName}</h3>
            <p>
              {commit.commitDate} - {commit.commitMessage}
            </p>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.buttonSpacer}></div>
            <div className={styles.bottomButton}>
              <motion.button
                className={styles.commitButton}
                onClick={() => window.open(commit.commitUrl, "_blank")}
                variants={boxVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <FaArrowAltCircleRight size={"85%"} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GitHubActivity;
