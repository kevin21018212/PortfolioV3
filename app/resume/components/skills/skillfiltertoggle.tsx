import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Dynamically adjust font size of <p> tags based on available space
    const buttons = document.querySelectorAll("." + styles.button);
    buttons.forEach((button) => {
      const tag = button.querySelector("." + styles.tag);
      const buttonWidth = button.offsetWidth;
      const tagWidth = tag.offsetWidth;
      const fontSize = Math.floor((buttonWidth / tagWidth) * 16); // Set initial font size

      tag.style.fontSize = fontSize + "px";
    });
  }, [tags]); // Update font size when tags change

  return (
    <div className={styles.filterToggleContainer}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={
            selectedTags.includes(tag)
              ? styles.selected + " " + styles.button
              : styles.button
          }
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
