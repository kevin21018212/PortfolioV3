import React, { useState } from "react";
import styles from "../css/skillfiltertoggle.module.css";

interface SkillFilterToggleProps {
  tags: string[];
  onToggle: (selectedTags: string[]) => void;
}

const SkillFilterToggle = ({ tags, onToggle }: SkillFilterToggleProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(tags);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      // Tag is already selected, remove it
      const newSelectedTags = selectedTags.filter(
        (selectedTag) => selectedTag !== tag
      );
      setSelectedTags(newSelectedTags);
      onToggle(newSelectedTags);
    } else {
      // Tag is not selected, add it
      const newSelectedTags = [...selectedTags, tag];
      setSelectedTags(newSelectedTags);
      onToggle(newSelectedTags);
    }
  };

  return (
    <div className={styles.filterToggleContainer}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={selectedTags.includes(tag) ? styles.selected : ""}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default SkillFilterToggle;
