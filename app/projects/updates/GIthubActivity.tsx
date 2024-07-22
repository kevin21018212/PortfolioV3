"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/project/updateSection.module.scss";
import { motion } from "framer-motion";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface Commit {
  repoName: string;
  commitMessage: string;
  commitDate: string;
  commitUrl: string; // Add this line to include commit URL
}

const GitHubActivity: React.FC = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [error, setError] = useState<string | null>(null);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

  useEffect(() => {
    if (!username || !accessToken) {
      console.log("GitHub username or access token is missing.");
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
          const commitUrl = payload.commits[0].url
            .replace("api.", "")
            .replace("repos/", "");
          return {
            repoName: repo.name.split("/")[1], // Get the part after the slash
            commitMessage: payload.commits[0].message,
            commitDate: commitDate,
            commitUrl: commitUrl, // Add the commit URL here
          };
        });

        console.log("recentCommits", recentCommits);
        setCommits(recentCommits);
      } catch (error: any) {
        console.error("Error fetching GitHub pushes:", error);
        setError(error.message);
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
          <div className={styles.cardTop}>
            <h3>{commit.repoName}</h3>
            <p>
              {commit.commitDate} - {commit.commitMessage}
            </p>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.buttonSpacer}></div>
            <div className={styles.bottomButton}>
              <button
                className={styles.commitButton}
                onClick={() => window.open(commit.commitUrl, "_blank")}
              >
                <FaArrowAltCircleRight size={"85%"} />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GitHubActivity;
