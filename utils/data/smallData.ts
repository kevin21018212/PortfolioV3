// Circle Data
export const circles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

// Job Data
export const jobData = [
  {
    title: "Software Developer (Full Stack) - John Deere | 2022 - Present",
    description: [
      "Led and contributed to high-impact projects in agile environments affecting 5,000 employees.",
      "Collaborated with Project Managers to design user stories in Jira and plan application architecture.",
      "Implemented Infrastructure as Code (IaC) using Terraform and established CI/CD pipelines in Jenkins for efficient, reliable deployment.",
    ],
    project: [
      // Primary Project
      [
        "Primary Project - Tracktor",
        "Spearheaded the development of a skill tracking web app.",
        "Technologies: AI, Next.js, AWS, Terraform, Postgres, Jenkins, OAuth, MUI, SCSS",
        "Key Contributions: \n" +
          "- Design & Development: Architected and developed the application from design (Figma) to implementation, using MUI and adhering to Deere standards for a safe and responsive app.\n" +
          "- Database & API Integration: Designed database schema, API routes, and set up cron jobs to auto-populate teams based on HR data. Integrated with company APIs for seamless user authentication via Okta.\n" +
          "- Responsive Data Flow: Implemented a responsive data flow using global state management (atoms), ensuring efficient data handling and interaction.",
      ],
      // Secondary Project
      [
        "Secondary Project - SAC App",
        "Co-led development of a security access control app, now used by 5,000+ employees.",
        "Technologies: Next.js, Terraform, PostgreSQL, AWS Lambda, API Gateway, SSR, Data Caching",
        "Key Contributions: \n" +
          "- Redesigned Data Flow: Migrated the app to SSR for improved performance and security, impacting employee access on a company-wide level.\n" +
          "- Infrastructure & Access Management: Built AWS API Gateway, Terraform infrastructure, and Lambda functions to enable dynamic access management, ensuring secure and efficient operations.\n" +
          "- File Handling & Integration: Streamlined file handling by converting XLSX files to binary strings, ensuring secure transmission using AWS SDK.",
      ],
    ],
  },
  {
    title: "Web Developer - Freelance | 2023 - Present",
    description: [
      "Managed full-stack development of dynamic web applications, overseeing architecture, UI/UX design, frontend development with Next.js and Framer Motion, backend integration, and production deployment.",
      "Led and delivered two high-impact projects, utilizing cutting-edge technologies to create robust, responsive websites under tight deadlines.",
      "Collaborated closely with clients to gather requirements, iterate on designs, and ensure seamless deployment, achieving 100% client satisfaction.",
    ],
    project: [
      // Freelance Project
      [
        "ISAFF Website",
        "Redesigned the ISAFF website with a fully dynamic and responsive layout.",
        "Technologies used: Next.js, Tailwind, Framer Motion, Vercel, AWS, Github",
      ],
    ],
  },
  {
    title: "Engineering Intern - Cabot | 2021 - 2022",
    description: [
      "Conducted a comprehensive analysis on silica bagging pipelines, identifying bottlenecks and recommending process improvements.",
      "Collaborated with a team of engineers to investigate a factory spill incident, creating a detailed flowchart for the EPA within 2 weeks.",
      "Designed and implemented VBA scripts to streamline data analysis and reporting processes, reducing manual data entry by 30%.",
    ],
  },
];

export default jobData;
