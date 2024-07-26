export type Project = {
  id: number;
  projectNumber: string;
  projectTitle: string;
  projectTag: string;
  description: string;
  projectTech: string;
  imageUrl: string;
  linkUrl: string;
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
  index: any;
};

export type SkillFilterToggleProps = {
  tags: string[];
  onToggle: (selectedTags: string[]) => void;
};
export interface Commit {
  repoName: string;
  commitMessage: string;
  commitDate: string;
  commitUrl: string;
}

export interface Repo {
  id: number;
  name: string;
  html_url: string;
  languages_url: string;
  updated_at: string;
}
