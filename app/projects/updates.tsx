import React from "react";
import gstyles from "@/styles/project/updateSection.module.scss";
import pstyles from "@/styles/project/profile.module.scss";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { boxVariants, staggerDivVariant } from "@/utils/framer";
import { Commit } from "@/utils/data/dataType";
import { Repo } from "@/utils/data/dataType";
interface GitHubActivityProps {
  commits: Commit[];
}

interface ProfileProps {
  username: string | undefined;
  repos: Repo[];
  totalCommits: number;
}

export const GitHubActivity: React.FC<GitHubActivityProps> = ({ commits }) => {
  return (
    <div className={gstyles.updateSection}>
      {commits.map((commit, index) => (
        <motion.div
          key={index}
          className={gstyles.commitCard}
          variants={staggerDivVariant}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <div className={gstyles.cardTop}>
            <h5>{commit.repoName}</h5>
            <p>
              {commit.commitDate} - {commit.commitMessage}
            </p>
          </div>
          <div className={gstyles.cardBottom}>
            <div className={gstyles.buttonSpacer}></div>
            <div className={gstyles.bottomButton}>
              <motion.button
                className={gstyles.commitButton}
                onClick={() => window.open(commit.commitUrl, "_blank")}
                variants={boxVariants("#239ad4")}
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

export const Profile: React.FC<ProfileProps> = ({ username, repos, totalCommits }) => {
  return (
    <div className={pstyles.profileContainer}>
      <div className={pstyles.header}>
        <h3>Github </h3>
      </div>

      <div className={pstyles.statsContainer}>
        <div className={pstyles.statBox}>
          <h4>Recent Commits</h4>
          <p>{totalCommits}</p>
        </div>
        <div className={pstyles.statBox}>
          <h4>Leetcode </h4>
          <p>100</p>
        </div>
      </div>

      <div className={pstyles.reposContainer}>
        <h3>Repositories</h3>
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
