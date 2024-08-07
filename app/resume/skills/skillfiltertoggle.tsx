import React, { useState } from "react";
import styles from "@/styles/resume/skills/skillfiltertoggle.module.scss";
import { SkillFilterToggleProps } from "@/utils/data/dataType";
import { motion } from "framer-motion";
import { staggerDivVariant } from "@/utils/framer";

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
      {tags.map((tag, index) => {
        const isSelected = selectedTags.includes(tag);
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
              whileHover={{ scale: 1.1 }}
              whileTap={{
                scale: 0.95,
                rotate: [0, 5, -5, 0],
                transition: { duration: 0.2 },
              }}
              layout
              animate={{
                backgroundColor: isSelected ? "#ef5e04" : "transparent",
                color: isSelected ? "#26221b" : "#fff",
                borderColor: isSelected ? "transparent" : "#fff",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className={styles.circle}
                layout
                animate={{
                  backgroundColor: isSelected ? "#26221b" : "#fff",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
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
