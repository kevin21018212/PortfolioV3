import React from "react";
import gstyles from "@/styles/project/updateSection.module.scss";
import pstyles from "@/styles/project/profile.module.scss";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { boxVariants, containerVariants, staggerDivVariant } from "@/utils/framer";
import { Commit, Repo } from "@/utils/data/dataType";

interface GitHubActivityProps {
  commits: Commit[];
}
interface ProfileProps {
  username: string | undefined;
  repos: Repo[];
  totalCommits: number;
}

const CommitCard: React.FC<{ commit: Commit; index: number }> = ({ commit, index }) => (
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
);

export const GitHubActivity: React.FC<GitHubActivityProps> = ({ commits }) => (
  <div className={gstyles.updateSection}>
    {commits.map((commit, index) => (
      <CommitCard key={index} commit={commit} index={index} />
    ))}
  </div>
);

const StatBox: React.FC<{ title: string; value: string | number; link: string }> = ({ title, value, link }) => (
  <motion.div
    className={pstyles.statBox}
    variants={boxVariants()}
    initial="hidden"
    animate="visible"
    exit="hidden"
    whileHover={{ scale: 1.05 }}
    onClick={() => window.open(link, "_blank")}
  >
    <h4>{title}</h4>
    <p>{value}</p>
  </motion.div>
);

export const Profile: React.FC<ProfileProps> = ({ username, repos, totalCommits }) => (
  <motion.div
    className={pstyles.profileContainer}
    initial="hidden"
    animate="visible"
    exit="hidden"
    variants={containerVariants}
  >
    <div className={pstyles.header}>
      <h3>Github</h3>
    </div>
    <motion.div className={pstyles.statsContainer} variants={staggerDivVariant}>
      <StatBox title="Recent Commits" value={totalCommits} link="https://github.com/kevin21018212" />
      <StatBox title="Leetcode" value={100} link="https://leetcode.com/u/trashlinkmain/" />
    </motion.div>
    <div className={pstyles.reposContainer}>
      <h3>Repositories</h3>
      <ul>
        {repos.map((repo) => (
          <motion.li key={repo.id} variants={boxVariants()}>
            <motion.a href={repo.html_url} target="_blank" rel="noopener noreferrer" whileHover={{ color: "#d7f227" }}>
              {repo.name}
            </motion.a>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);
