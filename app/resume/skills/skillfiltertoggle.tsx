import React, { useState } from "react";
import styles from "@/styles/resume/skills/skillfiltertoggle.module.scss";
import { SkillFilterToggleProps } from "@/utils/data/dataType";
import { motion } from "framer-motion";
import { staggerDivVariant } from "@/utils/framer";

const SkillFilterToggle = ({ tags, onToggle }: SkillFilterToggleProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(tags);
  const [clickedTag, setClickedTag] = useState<string | null>(null);

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelectedTags);
    onToggle(newSelectedTags);
    setClickedTag(tag); // Set the clicked tag to trigger animation
  };

  return (
    <div className={styles.filterToggleContainer}>
      {tags.map((tag, index) => {
        const isSelected = selectedTags.includes(tag);
        const isClicked = clickedTag === tag;
        return (
          <motion.div
            key={tag}
            className={styles.buttonWrapper}
            custom={index}
            variants={staggerDivVariant}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={() => toggleTag(tag)}
              className={isSelected ? styles.selected : ""}
              whileHover={{ scale: 1.05 }}
              layout
              animate={{
                scale: isClicked ? [1, 0.95, 1] : 1,
                rotate: isClicked ? [0, 5, 0] : 0,
                transition: { duration: 0.2 },
                backgroundColor: isSelected ? "#27b3f2" : "transparent",
                color: isSelected ? "#26221b" : "#fff",
                borderColor: isSelected ? "transparent" : "#fff",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onAnimationComplete={() => setClickedTag(null)} // Reset the clicked tag after animation
            >
              <motion.div
                className={styles.circle}
                layout
                animate={{
                  backgroundColor: isSelected ? "#26221b" : "#fff",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className={styles.tag}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h5>{tag}</h5>
              </motion.div>
            </motion.button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillFilterToggle;
