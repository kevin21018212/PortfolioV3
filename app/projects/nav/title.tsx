import React, { useRef } from "react";
import styles from "@/styles/project/project.module.scss";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { Project } from "@/utils/data/types";

type TitlesProps = {
  data: any;
  setSelectedProject: any;
};

const Titles = ({ data, setSelectedProject }: TitlesProps) => {
  return (
    <div className={styles.titles}>
      {data.map((project: Project, index: number) => {
        return (
          <Title
            key={index}
            data={{ ...project, index }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
};

const Title = ({ data, setSelectedProject }: TitlesProps) => {
  const { projectTitle, id, linkUrl } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / 0.8}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div
      ref={container}
      className={styles.title}
      onClick={() => {
        window.location.href = linkUrl;
      }}
    >
      <div
        className={styles.wrapper}
        onMouseOver={() => {
          setSelectedProject(id - 1);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.h1 style={{ clipPath: clip }}>{projectTitle}</motion.h1>
        <h1>{projectTitle}</h1>
      </div>
    </div>
  );
};

export default Titles;
