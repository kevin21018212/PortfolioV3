export type Project = {
  id: string;
  projectNumber: string;
  projectTitle: string;
  projectTag: string;
  description: string;
  projectTech: string;
  imageUrl: string | null;
  linkUrl: string | null;
};
export type SkillData = {
  title: string;
  skillName: string;
  experience: string;
  tags: string[];
};
export type ClassesCardProps = {
  category: {
    name: string;
    description: string;
    courses: string[];
  };
};

export type SkillCardProps = {
  title: string;
  skillName: string;
  experience: string;
};

export type SkillFilterToggleProps = {
  tags: string[];
  onToggle: (selectedTags: string[]) => void;
};
