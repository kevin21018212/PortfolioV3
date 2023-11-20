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
    experience: "2 years, Full-time",
    backgroundImageUrl: "/projectimg/aws.jpeg",
  },
  {
    title: "FRONTEND",
    skillName: "Next.js",
    experience: "1 year, Full-time",
    backgroundImageUrl: "/projectimg/nextjs.jpeg",
  },
  {
    title: "BACKEND",
    skillName: "Node.js",
    experience: "3 years, Full-time",
    backgroundImageUrl: "/projectimg/node.jpeg",
  },
  {
    title: "DATABASE",
    skillName: "SQL",
    experience: "4 years, Full-time",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "FRONTEND",
    skillName: "React",
    experience: "2 years, Full-time",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "PROGRAMMING",
    skillName: "C++",
    experience: "5 years, Full-time",
    backgroundImageUrl: "/projectimg/c++.png",
  },
  {
    title: "PROGRAMMING",
    skillName: "C",
    experience: "3 years, Full-time",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "PROGRAMMING",
    skillName: "Java",
    experience: "4 years, Full-time",
    backgroundImageUrl: "/projectimg/java.jpeg",
  },
  {
    title: "DATABASE",
    skillName: "PrismaDB",
    experience: "1 year, Full-time",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "FRONTEND",
    skillName: "CSS",
    experience: "3 years, Full-time",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "PROGRAMMING",
    skillName: "Data Structures and Algorithms",
    experience: "4 years, Full-time",
    backgroundImageUrl: null, // Set to null
  },
  {
    title: "TOOLS",
    skillName: "Git",
    experience: "2 years, Full-time",
    backgroundImageUrl: null, // Set to null
  },
];

export default skillsData;
