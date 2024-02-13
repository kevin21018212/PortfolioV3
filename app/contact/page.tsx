"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Marquee from "react-fast-marquee";

const ContactPage = () => {
  const words = ["Email ", "LinkedIn ", "Instagram ", "Phone "]; // Include space after each word

  const gradients = [
    "linear-gradient(to right, #4285F4, #EA4335)", // Gradient for "Email Email"
    "linear-gradient(to right, #0077B5, #0056A2)", // Gradient for "LinkedIn"
    "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)",
    "linear-gradient(to right, #00bcd4, #4caf50)", // Gradient for "Phone Phone"
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className={styles.contactContainer}>
      {words.map((word, index) => (
        <div
          key={index}
          className={styles.contactCard}
          style={{
            background: hoveredIndex === index ? gradients[index] : undefined,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <Marquee
            className={styles.marquee}
            pauseOnHover={true}
            autoFill={true}
          >
            <h1>{word}</h1>
            {index !== words.length - 1 && <span>&nbsp;</span>}
          </Marquee>
        </div>
      ))}
    </div>
  );
};

export default ContactPage;
