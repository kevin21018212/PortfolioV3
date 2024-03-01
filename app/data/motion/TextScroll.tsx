import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style.module.scss";

interface CharProps {
  char: string;
  progress: any;
  range: number[];
}

interface WordProps {
  word: string;
  progress: any;
  totalWords: number;
}

interface AnimatedParagraphProps {
  children: string;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ children }) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = children.split(" ");

  return (
    <p ref={container} className={styles.paragraph}>
      {words.map((word, i) => (
        <Word
          key={i}
          word={word}
          progress={scrollYProgress}
          totalWords={words.length}
        />
      ))}
    </p>
  );
};

const Word: React.FC<WordProps> = ({ word, progress, totalWords }) => {
  const container = useRef<HTMLSpanElement>(null);
  const start = 1 / totalWords;
  const end = start + 1 / totalWords;
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <span ref={container} className={styles.word}>
      {word.split("").map((char, i) => (
        <Char key={i} char={char} progress={progress} range={[start, end]} />
      ))}
    </span>
  );
};

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className={styles.shadow}>{char}</span>
      <motion.span style={{ opacity }}>{char}</motion.span>
    </span>
  );
};

export default AnimatedParagraph;
