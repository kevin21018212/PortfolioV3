"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const ContactPage = () => {
  const words = [
    { text: "Email \xa0", url: "mailto:your.email@example.com" },
    {
      text: "LinkedIn \xa0",
      url: "https://www.linkedin.com/in/matthew-bennett-592102252/",
    },
    { text: "Instagram \xa0", url: "https://www.instagram.com/your-profile" },
    { text: "Github \xa0", url: "https://github.com/kevin21018212" },
  ];

  const gradients = [
    "linear-gradient(to right, #4285F4, #EA4335)", // Gradient for "Email Email"
    "linear-gradient(to right, #0077B5, #0056A2)", // Gradient for "LinkedIn"
    "linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7)", // Gradient for "Instagram"
    "linear-gradient(to right, #00bcd4, #4caf50)", // Gradient for "Phone Phone"
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <motion.div className="pageContainer">
      {words.map((word, index) => (
        <a
          key={index}
          href={word.url}
          target="_blank"
          rel="noopener noreferrer"
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
            direction="right"
          >
            <h1>{word.text}</h1>
          </Marquee>
        </a>
      ))}
    </motion.div>
  );
};

export default ContactPage;
