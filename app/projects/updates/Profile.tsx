"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/project/profile.module.scss";

interface Commit {
  repoName: string;
  commitMessage: string;
  commitDate: string;
}

interface Repo {
  id: number;
  name: string;
  html_url: string;
  languages_url: string;
  updated_at: string;
}

const Profile: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

  useEffect(() => {
    if (!username || !accessToken) {
      console.log("GitHub username or access token is missing.");
      return;
    }

    const fetchGitHubData = async () => {
      try {
        const eventsResponse = await fetch(
          `https://api.github.com/users/${username}/events`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!eventsResponse.ok) {
          throw new Error(
            `Error fetching GitHub events: ${eventsResponse.statusText}`
          );
        }

        const events = await eventsResponse.json();
        if (!Array.isArray(events)) {
          throw new Error("Unexpected response format from GitHub API");
        }

        const pushes = events.filter(
          (event: any) => event.type === "PushEvent"
        );
        const recentCommits = pushes.slice(0, 9).map((push: any) => {
          const { repo, payload } = push;
          const commitDate = new Date(push.created_at).toLocaleDateString();
          return {
            repoName: repo.name.split("/")[1],
            commitMessage: payload.commits[0].message,
            commitDate: commitDate,
          };
        });

        setCommits(recentCommits);

        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!reposResponse.ok) {
          throw new Error(
            `Error fetching GitHub repositories: ${reposResponse.statusText}`
          );
        }

        let reposData: Repo[] = await reposResponse.json();
        reposData = reposData
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          )
          .slice(0, 6);
        setRepos(reposData);
      } catch (error: any) {
        console.error("Error fetching GitHub data:", error);
        setError(error.message);
      }
    };

    fetchGitHubData();
  }, [username, accessToken]);

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
              <div className={styles.infoValue}>{commits.length}</div>
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
