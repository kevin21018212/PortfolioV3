import { generateMeshGradient } from "meshgrad";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const getImagePath = (item: string | null): string => {
  return item ? `/about/${item}.jpg` : "";
};

export function getRandomMeshGradient(): string {
  const primaryColor = "#f27127";
  const primaryHoverColor = "#d66322";
  const secondaryColor = "#27b3f2";
  const secondaryHoverColor = "#239ad4";
  const additionalColors = ["#544E9D", "#F2A778"];

  const colors = [
    { base: primaryColor, hover: primaryHoverColor },
    { base: secondaryColor, hover: secondaryHoverColor },
  ];

  // Randomly select primary or primaryHover
  const primaryIndex = Math.floor(Math.random() * 2);
  const primary = colors[primaryIndex].base;
  const primaryHover = colors[primaryIndex].hover;

  // Select the secondary color set that is not the primary
  const secondaryIndex = (primaryIndex + 1) % 2;
  const secondary = colors[secondaryIndex].base;
  const secondaryHover = colors[secondaryIndex].hover;

  // Randomly choose to use hover colors or base colors
  const usePrimaryHover = Math.random() < 0.5;
  const useSecondaryHover = Math.random() < 0.5;

  const primaryColorChoice = usePrimaryHover ? primaryHover : primary;
  const secondaryColorChoice = useSecondaryHover ? secondaryHover : secondary;

  // Randomly decide whether to include an additional color
  const includeAdditionalColor = Math.random() < 0.5;
  const additionalColor = includeAdditionalColor
    ? additionalColors[Math.floor(Math.random() * additionalColors.length)]
    : null;

  // Random degree for the gradient
  const degree = Math.floor(Math.random() * 360);

  // Construct the gradient string
  const gradientColors = [primaryColorChoice, secondaryColorChoice];
  if (additionalColor) {
    gradientColors.push(additionalColor);
  }

  const gradientString = `linear-gradient(${degree}deg, ${gradientColors.join(
    ", "
  )})`;

  return gradientString;
}

export const fetchGitHubEvents = async (
  username: string,
  accessToken: string
) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/events`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  if (!response.ok)
    throw new Error(`Error fetching GitHub events: ${response.statusText}`);
  const events = await response.json();
  if (!Array.isArray(events))
    throw new Error("Unexpected response format from GitHub API");
  return events;
};

export const fetchGitHubRepos = async (
  username: string,
  accessToken: string
) => {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  if (!response.ok)
    throw new Error(
      `Error fetching GitHub repositories: ${response.statusText}`
    );
  return await response.json();
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
