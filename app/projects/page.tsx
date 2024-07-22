import React from "react";
import styles from "./projectPage.module.scss";
import Dash from "./displayed/Dash";
import Projects from "./nav/project";
import KevFm from "./displayed/KevFm";
import GitHubActivity from "./updates/GIthubActivity";
import ProfilePage from "./updates/Profile";

const ProjectsPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.updatesSection}>
        <div className={styles.title}>
          <h2>Recent Updates</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <ProfilePage />
          </div>
          <div className={styles.rightColumn}>
            <GitHubActivity />
          </div>
        </div>
      </div>

      <div className={styles.nav}>
        <Projects />
      </div>
      <div className={styles.projects}>
        <div className={styles.projectContainer}>
          <Dash />
        </div>
        <div className={styles.projectContainer}>
          <KevFm />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
