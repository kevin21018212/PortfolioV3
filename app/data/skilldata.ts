interface SkillData {
  title: string;
  skillName: string;
  experience: string;
  tags: string[]; // Added tags for categorization
  backgroundImageUrl: string | null;
}

const skillsData: SkillData[] = [
  {
    title: "CLOUD",
    skillName: "AWS",
    experience: "1 year, On-Job",
    tags: ["Devops"],
    backgroundImageUrl: "/projectimg/aws.jpeg",
  },
  {
    title: "FRONTEND",
    skillName: "Next.js",
    experience: "2 years, On-Job/Personal Projects",
    tags: ["Frontend"],
    backgroundImageUrl: "/projectimg/nextjs.jpeg",
  },
  {
    title: "BACKEND",
    skillName: "Node.js",
    experience: "1 year, Class/OnJob",
    tags: ["Backend"],
    backgroundImageUrl: "/projectimg/node.jpeg",
  },
  {
    title: "DATABASE",
    skillName: "SQL",
    experience: "1 year, On-Job/Class",
    tags: ["Data Science"],
    backgroundImageUrl: null,
  },
  {
    title: "FRONTEND",
    skillName: "React",
    experience: "2.5 years, On-Job/Class/Personal",
    tags: ["Frontend"],
    backgroundImageUrl: null,
  },
  {
    title: "PROGRAMMING",
    skillName: "C++",
    experience: "1/2 year, Class",
    tags: ["Languages"],
    backgroundImageUrl: "/projectimg/c++.png",
  },
  {
    title: "PROGRAMMING",
    skillName: "C",
    experience: "2 years, Class",
    tags: ["Languages"],
    backgroundImageUrl: null,
  },
  {
    title: "PROGRAMMING",
    skillName: "Java",
    experience: "2 years, Class/Personal",
    tags: ["Languages"],
    backgroundImageUrl: "/projectimg/java.jpeg",
  },
  {
    title: "DATABASE",
    skillName: "PrismaDB",
    experience: "1/2 year, On-Job",
    tags: ["Data Science"],
    backgroundImageUrl: null,
  },
  {
    title: "PROGRAMMING",
    skillName: "Data Structures and Algorithms",
    experience: "2 years, Class",
    tags: ["Languages"],
    backgroundImageUrl: null,
  },
  {
    title: "TOOLS",
    skillName: "Git",
    experience: "2 years, Class'/Job/Personal",
    tags: ["Version Control", "Collaboration"],
    backgroundImageUrl: null,
  },
];

export default skillsData;
