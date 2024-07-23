import { hexColorOptions } from "./data/smallData";
import easyMeshGradient from "easy-mesh-gradient";

export const getImagePath = (item: string | null): string => {
  return item ? `/about/${item}.jpg` : "";
};

export const getRandomGradient = () => {
  const randomColor1 =
    hexColorOptions[Math.floor(Math.random() * hexColorOptions.length)];
  let randomColor2;
  do {
    randomColor2 =
      hexColorOptions[Math.floor(Math.random() * hexColorOptions.length)];
  } while (randomColor2 === randomColor1);

  const randomDegree = Math.floor(Math.random() * 361);

  return `linear-gradient(${randomDegree}deg, ${randomColor1}, ${randomColor2})`;
};

interface Point {
  x: number;
  y: number;
  h: number;
  s: number;
  l: number;
  scale: number;
}

interface GradientOptions {
  points?: Point[];
  easing?: (t: number) => number;
  easingStops?: number;
  seed?: string;
  pointCount?: number;
  scaleRange?: number[];
  hueRange?: number[];
  saturationRange?: number[];
  lightnessRange?: number[];
}

export function getRandomMeshGradient() {
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  let gradientString: string;

  switch (randomNumber) {
    case 1:
      gradientString = easyMeshGradient({
        hueRange: [-10, 30],
        easingStops: 7,
        pointCount: 7,
      });
      break;
    case 2:
      gradientString = easyMeshGradient({
        hueRange: [-130, 0],
        easingStops: 5,
        pointCount: 15,
      });
      break;
    case 3:
      gradientString = easyMeshGradient({
        hueRange: [-50, 10],
        easingStops: 5,
        pointCount: 10,
      });
      break;
    case 4:
      gradientString = easyMeshGradient({
        hueRange: [-90, 20],
        easingStops: 10,
        pointCount: 5,
      });
      break;
    default:
      gradientString = easyMeshGradient({ hueRange: [-30, 30] });
  }

  return gradientString;
}

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
const accessToken = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

export const fetchGitHubEvents = async () => {
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

export const fetchGitHubRepos = async () => {
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
