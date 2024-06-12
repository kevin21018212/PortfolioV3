"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "@/app/styles/resume/resumecluster/about.module.scss"; // Ensure the correct extension
import { getImagePath } from "@/app/data/functions";

const AboutDisplay = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = ["Outdoor", "Travel", "Fashion", "Art", "Music"];

  return (
    <motion.div className={styles.aboutdisplay}>
      <div className={styles.abouttext}>
        <h3>Extra</h3>
        {items.map((item, index) => (
          <motion.h6
            key={index}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}
          </motion.h6>
        ))}
      </div>
      <motion.div
        className={styles.aboutimg}
        initial={{
          backgroundImage: `url(${getImagePath(hoveredItem)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        animate={{
          backgroundImage: `url(${getImagePath(hoveredItem)})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default AboutDisplay;
