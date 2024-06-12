import React, { useState } from "react";
import styles from "@/app/styles/resume/skills/skillfiltertoggle.module.scss";
import { SkillFilterToggleProps } from "@/app/data/types";
import { motion } from "framer-motion";

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
        <div key={tag}>
          <motion.button
            onClick={() => toggleTag(tag)}
            className={selectedTags.includes(tag) ? styles.selected : ""}
          >
            <div className={styles.circle}></div>
            <div className={styles.tag}>
              <p>{tag}</p>
            </div>
          </motion.button>
        </div>
      ))}
    </div>
  );
};

export default SkillFilterToggle;
