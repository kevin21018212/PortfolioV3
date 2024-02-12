"use client";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

const ContactPage = () => {
  const words = ["Email", "LinkedIn", "Instagram", "Phone"];
  const contactCards = [];

  useEffect(() => {
    let xPercent = 0;

    const animate = () => {
      if (xPercent > 0) {
        xPercent = -100;
      }

      for (let i = 0; i < words.length; i++) {
        const firstText = document.getElementById(`firstText${i}`);
        const secondText = document.getElementById(`secondText${i}`);

        if (firstText && secondText) {
          firstText.style.left = `${firstText.getBoundingClientRect().width}px`;
          secondText.style.left = `${
            secondText.getBoundingClientRect().width
          }px`;

          firstText.style.transform = `translateX(${xPercent}%)`;
          secondText.style.transform = `translateX(${xPercent}%)`;
        }
      }

      requestAnimationFrame(animate);
      xPercent += 0.1;
    };

    requestAnimationFrame(animate);

    return () => {};
  }, []);

  for (let i = 0; i < words.length; i++) {
    contactCards.push(
      <div key={i} className={styles.contactCard}>
        <h1 id={`firstText${i}`} className={styles.text}>
          {words[i]}
        </h1>
        <h1 id={`secondText${i}`} className={styles.text}>
          {words[i]}
        </h1>
      </div>
    );
  }

  return <div className={styles.contactContainer}>{contactCards}</div>;
};

export default ContactPage;
