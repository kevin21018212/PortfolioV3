import React, { useRef, useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { SplideSlide } from "@splidejs/react-splide";
import styles from "../css/skillslider.module.css";
import SkillCard from "./skillcard";
import skillsData from "@/app/data/skilldata";
import SkillFilterToggle from "./skillfiltertoggle";

interface SkillData {
  title: string;
  skillName: string;
  experience: string;
  tags: string[];
  backgroundImageUrl: string | null;
}

const SkillSlider = () => {
  const splideRef = useRef<any | null>(null);
  const [filteredSkills, setFilteredSkills] = useState<SkillData[]>(skillsData);
  const allTags = [
    "Frontend",
    "Backend",
    "Devops",
    "Version Control",
    "Data Science",
    "Languages",
  ];
  const [selectedTags, setSelectedTags] = useState<string[]>(allTags);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = new Splide(splideRef.current, {
        perPage: 5.5,
        width: "100%",
        height: "40vh",
        gap: "2vw",
      });

      splideRef.current.splide = splideInstance;

      if (filteredSkills.length > 0) {
        splideInstance.mount();
      }
    }

    filterSkills(selectedTags);

    if (splideRef.current && splideRef.current.splide) {
      splideRef.current.splide.refresh();

      if (filteredSkills.length === 0) {
        splideRef.current.splide.destroy();
      }
    }
  }, [selectedTags, filteredSkills]);

  const filterSkills = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredSkills([]);
    } else {
      const filtered = skillsData.filter((skill) =>
        selectedTags.some((tag) => skill.tags.includes(tag))
      );
      setFilteredSkills(filtered);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.toggleContainer}>
        <SkillFilterToggle tags={allTags} onToggle={setSelectedTags} />
      </div>
      <div className={styles.sliderTrack}>
        <div
          className={`splide ${
            filteredSkills.length === 0 ? "is-overflow" : ""
          }`}
          ref={splideRef}
        >
          <div className="splide__track">
            <ul className="splide__list" style={{ justifyContent: "center" }}>
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
    </div>
  );
};

export default SkillSlider;
