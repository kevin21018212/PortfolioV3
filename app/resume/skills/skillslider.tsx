import React, { useRef, useEffect, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { SplideSlide, Splide as SplideComponent } from "@splidejs/react-splide";
import styles from "@/styles/resume/skills/skillslider.module.scss";
import SkillCard from "./skillcard";
import skillsData, { allTags, mobileTags } from "@/utils/data/skilldata";
import SkillFilterToggle from "./skillfiltertoggle";

const SkillSlider = () => {
  const splideRef = useRef<HTMLDivElement>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>(allTags);
  const [height, setHeight] = useState<string>("45vh");
  const [tags, setTags] = useState<any>(mobileTags);

  const filteredSkills = skillsData.filter(
    (skill) =>
      selectedTags.length === 0 ||
      selectedTags.some((tag) => skill.tags.includes(tag))
  );

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setTags(mobileTags.concat(allTags));
      setHeight("55vh");
    } else {
      setTags(mobileTags);
      setHeight("40vh");
    }
  }, []);

  const splideOptions = {
    type: "loop",
    perPage: 4.5,
    height: height,
    breakpoints: {
      600: {
        perPage: 1.5,
        height: "40vh",
      },
      1200: {
        perPage: 2.5,
        height: "45vh",
      },
      1600: {
        perPage: 4.5,
        height: "55vh",
      },
    },
    pagination: true,
    arrows: true,
  };

  useEffect(() => {
    const splideInstance = new Splide(splideRef.current!, splideOptions);

    splideInstance.on("visible", (Slide) => {
      const card = Slide.slide.querySelector(
        ".skillcardContainer"
      ) as HTMLElement;
      if (card) {
        card.style.opacity = "1";
      }
    });

    splideInstance.on("hidden", (Slide) => {
      const card = Slide.slide.querySelector(
        ".skillcardContainer"
      ) as HTMLElement;
      if (card) {
        card.style.opacity = "0";
      }
    });

    splideInstance.mount();

    return () => {
      splideInstance.destroy();
    };
  }, [filteredSkills, splideOptions]);

  return (
    <>
      <div className={styles.toggleContainer}>
        <SkillFilterToggle tags={tags} onToggle={setSelectedTags} />
      </div>
      <div className={styles.sliderContainer}>
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
                  <SplideSlide key={`${skill.title}-${index}`}>
                    <div className={styles.splide__slide}>
                      <SkillCard
                        title={skill.title}
                        skillName={skill.skillName}
                        experience={skill.experience}
                        index={index}
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
    </>
  );
};

export default SkillSlider;
