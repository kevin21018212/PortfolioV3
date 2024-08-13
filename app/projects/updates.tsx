import React from 'react';
import gstyles from '@/styles/project/updateSection.module.scss';
import pstyles from '@/styles/project/profile.module.scss';
import {motion} from 'framer-motion';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {boxVariants, staggerDivVariant} from '@/utils/framer';
import {Commit} from '@/utils/data/dataType';
import {Repo} from '@/utils/data/dataType';
interface GitHubActivityProps {
  commits: Commit[];
}

interface ProfileProps {
  username: string | undefined;
  repos: Repo[];
}

export const GitHubActivity: React.FC<GitHubActivityProps> = ({commits}) => {
  return (
    <div className={gstyles.updateSection}>
      {commits.map((commit, index) => (
        <motion.div key={index} className={gstyles.commitCard} variants={staggerDivVariant} initial='hidden' animate='visible' custom={index}>
          <div className={gstyles.cardTop}>
            <h6>{commit.repoName}</h6>
            <p>
              {commit.commitDate} - {commit.commitMessage}
            </p>
          </div>
          <div className={gstyles.cardBottom}>
            <div className={gstyles.buttonSpacer}></div>
            <div className={gstyles.bottomButton}>
              <motion.button
                className={gstyles.commitButton}
                onClick={() => window.open(commit.commitUrl, '_blank')}
                variants={boxVariants('#239ad4')}
                whileHover='hover'
                whileTap={{scale: 0.9}}>
                <FaArrowAltCircleRight size={'85%'} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const Profile: React.FC<ProfileProps> = ({username, repos}) => {
  return (
    <div className={pstyles.cardContainer}>
      <div className={pstyles.card}>
        <div className={pstyles.cardHeader}>
          <div className={pstyles.titleSpacer}>
            <div className={pstyles.titleInner}></div>
          </div>
          <div className={pstyles.cardTitle}>
            <h6>{username}</h6>
          </div>
        </div>
        <div className={pstyles.cardBody}>
          <div className={pstyles.cardInfo}>
            <div className={pstyles.infoBox}>
              <div className={pstyles.infoLabel}>Recent Commits</div>
              <div className={pstyles.infoValue}>9</div>
            </div>
            <div className={pstyles.infoBox}>
              <div className={pstyles.infoLabel}>Leetcodes Complete</div>
              <div className={pstyles.infoValue}>45</div>
            </div>
          </div>

          <div className={pstyles.githubInfo}>
            <h4>Repositories</h4>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
