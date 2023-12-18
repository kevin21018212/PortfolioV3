// Updated SkillSlider component
import React, { useRef, useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { SplideSlide } from "@splidejs/react-splide";
import styles from "../css/skillslider.module.css";
import SkillCard from "./skillcard";
import SkillFilterToggle from "./skillfiltertoggle";
import skillsData from "@/app/data/skilldata";

interface SkillData {
  title: string;
  skillName: string;
  experience: string;
  tags: string[]; // Added tags for categorization
  backgroundImageUrl: string | null;
}

const SkillSlider = () => {
  const splideRef = useRef(null);
  const [filteredSkills, setFilteredSkills] = useState<SkillData[]>(skillsData); // All skills are initially selected
  const allTags = [
    "Frontend",
    "Backend",
    "Devops",
    "Version Control",
    "Data Science",
    "Languages",
  ];
  const [selectedTags, setSelectedTags] = useState<string[]>(allTags); // All tags are initially selected

  useEffect(() => {
    // Initialize Splide after the component is mounted
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: "loop",
        perPage: 5.5,
        width: "100%",
        height: "40vh",
        gap: "2vw",
      }).mount();
    }

    filterSkills(selectedTags);
    console.log(filteredSkills, selectedTags);
  }, [selectedTags]);

  const handleTagToggle = (selectedTags: string[]) => {
    setSelectedTags(selectedTags);
    filterSkills(selectedTags);
  };

  const filterSkills = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredSkills([]); // No tags selected, don't show any skills
    } else {
      const filtered = skillsData.filter((skill) =>
        selectedTags.some((tag) => skill.tags.includes(tag))
      );
      setFilteredSkills(filtered);
    }
  };

  return (
    <div className={styles.skillsliderContainer}>
      <SkillFilterToggle tags={allTags} onToggle={handleTagToggle} />
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {filteredSkills.map((skill, index) => (
              <SplideSlide key={index}>
                <div className={styles.splide__slide}>
                  <SkillCard
                    title={skill.title}
                    skillName={skill.skillName}
                    experience={skill.experience}
                    backgroundImageUrl={skill.backgroundImageUrl}
                  />
                </div>
              </SplideSlide>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.navigation}></div>
    </div>
  );
};

export default SkillSlider;
