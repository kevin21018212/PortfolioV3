export type ProjectData = {
  id: string;
  topRight: string;
  middleRight: string;
  bottomRight: string;
  middleMiddle: string;
  bottomMiddle: string;
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
