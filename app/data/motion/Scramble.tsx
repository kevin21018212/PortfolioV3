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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scramble(); // Start scrambling when text comes into view
          } else {
            stopScramble(); // Stop scrambling when text goes out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    observer.observe(document.getElementById("scramble-text")!);

    return () => {
      observer.disconnect(); // Disconnect the observer when component unmounts
      stopScramble(); // Stop scrambling when component unmounts
    };
  }, []); // Empty dependency array to run only once on mount

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
