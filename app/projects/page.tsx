import React from "react";
import Project from "./project";

interface ProjectData {
  title: string;
  date: string;
  description: string;
  tags: string[];
  link: string | null;
  image: string | null; // New property for the image URL
}

const fakeData: ProjectData[] = [
  {
    title: "Project 1",
    date: "2023-01-15",
    description: "This is the description for Project 1.",
    tags: ["Frontend", "React", "JavaScript"],
    link: "https://project1.com",
    image: "https://example.com/image1.jpg", // Image URL for Project 1
  },
  {
    title: "Project 2",
    date: "2023-02-28",
    description: "This is the description for Project 2.",
    tags: ["Backend", "Node.js", "Express"],
    link: null,
    image: "https://example.com/image2.jpg", // Image URL for Project 2
  },
  {
    title: "Project 3",
    date: "2023-03-10",
    description: "This is the description for Project 3.",
    tags: ["Devops", "Docker", "Kubernetes"],
    link: "https://project3.com",
    image: "https://example.com/image3.jpg", // Image URL for Project 3
  },
];

const ProjectsPage = () => {
  return (
    <div>
      {fakeData.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
