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
  const [totalCommits, setTotalCommits] = useState<number>(0); // Total commits for the current year

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

        // This variable will store the correct amount of commits
        const recentCommits: Commit[] = [];

        pushes.forEach((push: any) => {
          const { repo, payload } = push;
          const commitDate = new Date(push.created_at);
          const commitMessages = payload.commits;

          // Count all commits for the current year
          if (commitDate.getFullYear() === currentYear) {
            totalCommitsInYear += commitMessages.length;
          }

          // Extract each commit's details
          commitMessages.forEach((commit: any) => {
            const commitUrl = commit.url.replace("api.", "").replace("repos/", "");
            recentCommits.push({
              repoName: repo.name.split("/")[1],
              commitMessage: commit.message,
              commitDate: commitDate.toLocaleDateString(),
              commitUrl: commitUrl,
            });
          });
        });

        // Store only the most recent 8 commits
        setCommits(recentCommits.slice(0, 8));

        const sortedRepos = reposData
          .sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6);

        setRepos(sortedRepos);

        // Update total commits for the year
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
            {/* Profile section now displays total commits for the year */}
            <Profile username={username} repos={repos} totalCommits={totalCommits} />
          </div>
          <div className={styles.rightColumn}>
            {/* GitHub activity shows only the recent 8 commits */}
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
