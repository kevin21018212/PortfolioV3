export const circles = [
  { id: "circle1" },
  { id: "circle2" },
  { id: "circle3" },
  { id: "circle4" },
  { id: "circle5" },
];

export const splideConfig = (perPage: number, height: string): any => ({
  perPage,
  width: "100%",
  height,
  gap: "1vw",
  type: "loop",
  drag: "free",
});

export const jobData = [
  {
    title: "John Deere | 2022 - Present",
    description: [
      "Year-round developer internship at John Deere.",
      "Full-stack development on multiple company apps.",
      "Technologies used: AWS, APIs, Databases, Next.js.",
    ],
  },
  {
    title: "Acacia Fraternity Web Dev | 2023 - Present",
    description: [
      "Web development and general maintenance.",
      "Technologies used: Next.js, Tailwind, Framer, Firebase Hosting.",
    ],
  },
  {
    title: "Cabot Corporation | 2021 - 2022",
    description: [
      "General internship focusing on analyzing large datasets.",
      "Specialized in loss/spill prevention, VBA integration.",
    ],
  },
];

export const hexColorOptions = [
  "#f277B0", // Pink
  "#152FBF", // Purple
  "#2B76D9", // Blue
  "#0DF205", // Lime
  "#F26E50", // Salmon
];
