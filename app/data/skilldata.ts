interface SkillData {
  title: string;
  skillName: string;
  experience: string;
  backgroundImageUrl: string | null;
}

const skillsData: SkillData[] = [
  {
    title: "CLOUD",
    skillName: "AWS",
    experience: "1 years, On-Job",
    backgroundImageUrl: "/projectimg/aws.jpeg",
  },
  {
    title: "FRONTEND",
    skillName: "Next.js",
    experience: "2 year, On-Job/Personal Projects",
    backgroundImageUrl: "/projectimg/nextjs.jpeg",
  },
  {
    title: "BACKEND",
    skillName: "Node.js",
    experience: "1 years, Class/OnJob",
    backgroundImageUrl: "/projectimg/node.jpeg",
  },
  {
    title: "DATABASE",
    skillName: "SQL",
    experience: "1 years, On-Job/Class",
    backgroundImageUrl: null,
  },
  {
    title: "FRONTEND",
    skillName: "React",
    experience: "2.5 years, On-Job/Class/Personal",
    backgroundImageUrl: null,
  },
  {
    title: "PROGRAMMING",
    skillName: "C++",
    experience: "1/2 year, Class",
    backgroundImageUrl: "/projectimg/c++.png",
  },
  {
    title: "PROGRAMMING",
    skillName: "C",
    experience: "2 years, Class",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "PROGRAMMING",
    skillName: "Java",
    experience: "2 years, Class/Personal",
    backgroundImageUrl: "/projectimg/java.jpeg",
  },
  {
    title: "DATABASE",
    skillName: "PrismaDB",
    experience: "1/2 year, On-Job",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "PROGRAMMING",
    skillName: "Data Structures and Algorithms",
    experience: "2 years, Class",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "TOOLS",
    skillName: "Git",
    experience: "2 years, Class'/Job/Personal",
    backgroundImageUrl: null, // Set to null
  },
];

export default skillsData;
