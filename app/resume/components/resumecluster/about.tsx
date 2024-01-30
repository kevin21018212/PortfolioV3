"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../css/resumecluster/about.module.css";

interface AboutDisplayProps {}

const AboutDisplay: React.FC<AboutDisplayProps> = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = ["Outdoor", "Travel", "Fashion", "Art", "Music"];

  const handleItemHover = (item: string | null) => {
    setHoveredItem(item);
  };

  const getImagePath = (item: string | null): string => {
    return item ? `/about/${item}.jpg` : "";
  };

  return (
    <div className={styles.aboutdisplay}>
      <div className={styles.abouttext}>
        <h4>Extra</h4>
        {items.map((item, index) => (
          <motion.p
            key={index}
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => handleItemHover(item)}
            onMouseLeave={() => handleItemHover(null)}
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
