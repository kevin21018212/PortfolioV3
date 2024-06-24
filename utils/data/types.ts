export type Project = {
  id: number;
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

type handleToggleProject = () => void;
export type spacerContainerProps = {
  title: string;
  tag: string | null;
  handleToggleProject: handleToggleProject | null;
  isProjectOpen: boolean;
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
