import { ClassValue, clsx } from "clsx";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export const getImagePath = (item: string | null): string => {
  return item ? `/about/${item}.jpg` : "";
};

export function getRandomMeshGradient(): string {
  const colors = [
    { base: "#f27127", hover: "#d66322" },
    { base: "#27b3f2", hover: "#239ad4" },
  ];
  const additionalColors = ["#544E9D", "#F2A778"];

  const primaryIndex = Math.floor(Math.random() * colors.length);
  const secondaryIndex = 1 - primaryIndex;

  const primaryColor = Math.random() < 0.5 ? colors[primaryIndex].base : colors[primaryIndex].hover;
  const secondaryColor = Math.random() < 0.5 ? colors[secondaryIndex].base : colors[secondaryIndex].hover;

  const gradientColors = [primaryColor, secondaryColor];
  if (Math.random() < 0.5) {
    gradientColors.push(additionalColors[Math.floor(Math.random() * additionalColors.length)]);
  }

  const degree = Math.floor(Math.random() * 360);
  return `linear-gradient(${degree}deg, ${gradientColors.join(", ")})`;
}

export const fetchGitHubEvents = async (username: string, accessToken: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/events`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!response.ok) throw new Error(`Error fetching GitHub events: ${response.statusText}`);
  const events = await response.json();
  if (!Array.isArray(events)) throw new Error("Unexpected response format from GitHub API");
  return events;
};

export const fetchGitHubRepos = async (username: string, accessToken: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!response.ok) throw new Error(`Error fetching GitHub repositories: ${response.statusText}`);
  return await response.json();
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    checkMobile(); // Initial check

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};
