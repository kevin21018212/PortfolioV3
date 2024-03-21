"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const CYCLES_PER_LETTER = 1;
const SHUFFLE_TIME = 30;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const ScrambleText: React.FC<any> = ({ children }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const TARGET_TEXT = children;

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char: any, index: number) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT);
  };

  return (
    <motion.div
      id="scramble-text"
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
    >
      <div>
        <span>{text}</span>
      </div>
    </motion.div>
  );
};

export default ScrambleText;
