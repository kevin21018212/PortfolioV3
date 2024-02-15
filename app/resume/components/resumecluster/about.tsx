"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../css/resumecluster/about.module.css";
import { getImagePath } from "@/app/data/functions";

interface AboutDisplayProps {}

const AboutDisplay: React.FC<AboutDisplayProps> = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = ["Outdoor", "Travel", "Fashion", "Art", "Music"];

  return (
    <div className={styles.aboutdisplay}>
      <div className={styles.abouttext}>
        <h4>Extra</h4>
        {items.map((item, index) => (
          <motion.p
            key={index}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}
          </motion.p>
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
    </div>
  );
};

export default AboutDisplay;
