"use client";
import { useMotionValue, motion } from "framer-motion";
import { useRef } from "react";
import styles from "../css/skillslider.module.css";
import skillsData from "@/app/data/skilldata";
import SkillCard from "./skillcard";

const SkillSlider = () => {
  const numSkills = skillsData.length;
  const initialX = -(numSkills / 2) * 25;
  const x = useMotionValue(initialX);

  const ref = useRef(null);

  return (
    <motion.div ref={ref} className={styles.skillsliderContainer}>
      <motion.div drag={"x"} dragConstraints={ref} className={styles.carousel}>
        {skillsData.map((skill: any, index: number) => (
          <motion.div key={index} className={styles.skillcardContainer}>
            <SkillCard
              title={skill.title}
              skillName={skill.skillName}
              experience={skill.experience}
              backgroundImageUrl={skill.backgroundImageUrl}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className={styles.navigation}></div>
    </motion.div>
  );
};

export default SkillSlider;
