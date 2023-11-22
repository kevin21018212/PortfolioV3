// SkillSlider component

import React, { useRef, useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { SplideSlide } from "@splidejs/react-splide";
import styles from "../css/skillslider.module.css";
import skillsData from "@/app/data/skilldata";
import SkillCard from "./skillcard";

const SkillSlider = () => {
  const splideRef = useRef(null);

  useEffect(() => {
    // Initialize Splide after component is mounted
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: "loop",
        perPage: 4, // Display 4 skill cards at a time
        width: "100%",
        height: "40vh", // Set the height of the slider
        gap: "2vw", // Add margin between cardss
      }).mount();
    }
  }, []);

  return (
    <div className={styles.skillsliderContainer}>
      <div className="splide" ref={splideRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {skillsData.map((skill, index) => (
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
