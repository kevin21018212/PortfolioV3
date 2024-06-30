// GitHubActivity.tsx
"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/project/updateSection.module.scss";
import { motion } from "framer-motion";

interface Commit {
  repoName: string;
  commitMessage: string;
  commitDate: string;
}

const GitHubActivity: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<string | null>(null);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

  useEffect(() => {
    if (!username || !accessToken) {
      setError("GitHub username or access token is missing.");
      return;
    }

    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/events`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Error fetching GitHub events: ${response.statusText}`
          );
        }

        const events = await response.json();
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
            repoName: repo.name.split("/")[1], // Get the part after the slash
            commitMessage: payload.commits[0].message,
            commitDate: commitDate,
          };
        });

        setCommits(recentCommits);
      } catch (error) {
        console.error("Error fetching GitHub pushes:", error);
      }
    };

    fetchContributions();
  }, [username, accessToken]);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.updateSection}>
      {commits.map((commit, index) => (
        <motion.div
          key={index}
          className={styles.commitCard}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.1 * index,
          }}
        >
          <h3>{commit.repoName}</h3>
          <p>{commit.commitDate}</p>
          <p>{commit.commitMessage}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default GitHubActivity;
