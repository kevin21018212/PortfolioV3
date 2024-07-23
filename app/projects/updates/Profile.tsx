import React from "react";
import styles from "@/styles/project/profile.module.scss";
import { Repo } from "@/utils/data/dataType";

interface ProfileProps {
  username: string | undefined;
  repos: Repo[];
}

const Profile: React.FC<ProfileProps> = ({ username, repos }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.titleSpacer}>
            <div className={styles.titleInner}></div>
          </div>
          <div className={styles.cardTitle}>
            <h6>{username}</h6>
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardInfo}>
            <div className={styles.infoBox}>
              <div className={styles.infoLabel}>Recent Commits</div>
              <div className={styles.infoValue}>9</div>
            </div>
            <div className={styles.infoBox}>
              <div className={styles.infoLabel}>Leetcodes Complete</div>
              <div className={styles.infoValue}>45</div>
            </div>
          </div>

          <div className={styles.githubInfo}>
            <h4>Repositories</h4>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

export default Profile;
