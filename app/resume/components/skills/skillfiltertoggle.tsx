import React, { useState } from "react";
import styles from "../../css/skills/skillfiltertoggle.module.css";

interface SkillFilterToggleProps {
  tags: string[];
  onToggle: (selectedTags: string[]) => void;
}

const SkillFilterToggle = ({ tags, onToggle }: SkillFilterToggleProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(tags);

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelectedTags);
    onToggle(newSelectedTags);
  };

  return (
    <div className={styles.filterToggleContainer}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={selectedTags.includes(tag) ? styles.selected : ""}
        >
          <div className={styles.circle}></div>
          <div className={styles.tag}>
            <p>{tag}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SkillFilterToggle;
