import React, { useRef, useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { SplideSlide } from "@splidejs/react-splide";
import styles from "../../css/skills/skillslider.module.css";
import SkillCard from "./skillcard";
import skillsData, { allTags, mobileTags } from "@/app/data/skilldata";
import SkillFilterToggle from "./skillfiltertoggle";

const SkillSlider = () => {
  const splideRef = useRef<any | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>(allTags);
  const [height, setHeight] = useState<string>("40vh");
  const [perPage, setPerPage] = useState<number>(2.5); // Initial value
  const [tags, setTags] = useState<any>(mobileTags);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setPerPage(windowWidth <= 600 ? 1.75 : windowWidth <= 1200 ? 2.5 : 4.5);
      if (windowWidth >= 1200) {
        setTags(mobileTags.concat(allTags));
        setHeight("50vh");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredSkills = skillsData.filter((skill) =>
    selectedTags.length === 0
      ? true
      : selectedTags.some((tag) => skill.tags.includes(tag))
  );

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = new Splide(splideRef.current, {
        perPage, // Use the state variable for perPage
        width: "100%",
        height,
        gap: "1vw",
        type: "loop",
        drag: "free",
      });

      splideRef.current.splide = splideInstance;

      if (filteredSkills.length > 0) {
        splideInstance.mount();
        splideInstance.refresh();
      } else {
        splideInstance.destroy();
      }
    }
  }, [filteredSkills, perPage]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.toggleContainer}>
        <SkillFilterToggle tags={tags} onToggle={setSelectedTags} />
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
