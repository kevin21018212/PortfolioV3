"use client";
import React, { useEffect, useState } from "react";
import styles from "./projectPage.module.scss";
import Projects from "./nav/project";
import { Commit, Repo } from "@/utils/data/dataType";
import { fetchGitHubEvents, fetchGitHubRepos } from "@/utils/functions";
import { projectData } from "@/utils/data/projectdata";
import Project from "./displayed/Project";
import { GitHubActivity, Profile } from "./updates";

const ProjectsPage: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(0);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "";
  const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [events, reposData] = await Promise.all([
          fetchGitHubEvents(username, accessToken),
          fetchGitHubRepos(username, accessToken),
        ]);

        const currentYear = new Date().getFullYear();
        let totalCommitsInYear = 0;

        const pushes = events.filter((event: any) => event.type === "PushEvent");

        const recentCommits = pushes.slice(0, 9).map((push: any) => {
          const { repo, payload } = push;
          const commitDate = new Date(push.created_at);
          const commitUrl = payload.commits[0].url.replace("api.", "").replace("repos/", "");

          // Count commits for the current year
          if (commitDate.getFullYear() === currentYear) {
            totalCommitsInYear += payload.commits.length;
          }

          return {
            repoName: repo.name.split("/")[1],
            commitMessage: payload.commits[0].message,
            commitDate: commitDate.toLocaleDateString(),
            commitUrl: commitUrl,
          };
        });

        setCommits(recentCommits);

        const sortedRepos = reposData
          .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6);

        setRepos(sortedRepos);

        // Update total commits in the year
        setTotalCommits(totalCommitsInYear);
      } catch (error: any) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.updatesSection}>
        <div className={styles.title}>
          <h2>Recent Updates</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <Profile username={username} repos={repos} totalCommits={totalCommits} />
          </div>
          <div className={styles.rightColumn}>
            <GitHubActivity commits={commits} />
          </div>
        </div>
      </div>

      <div className={styles.nav}>
        <Projects />
      </div>
      <div className={styles.projects}>
        {projectData.map((item: any, index: number) => (
          <Project key={index} project={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
