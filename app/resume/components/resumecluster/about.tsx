"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "../../css/resumecluster/about.module.css";

interface AboutDisplayProps {}

const AboutDisplay: React.FC<AboutDisplayProps> = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleItemHover = (item: string | null) => {
    setHoveredItem(item);
  };

  return (
    <div className={styles.aboutdisplay}>
      <div className={styles.abouttext}>
        <p className="t4">Extra</p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => handleItemHover("Outdoor Rec")}
          onMouseLeave={() => handleItemHover(null)}
        >
          Outdoor Rec
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => handleItemHover("Traveling")}
          onMouseLeave={() => handleItemHover(null)}
        >
          Traveling
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => handleItemHover("Fashion")}
          onMouseLeave={() => handleItemHover(null)}
        >
          Fashion
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => handleItemHover("Art")}
          onMouseLeave={() => handleItemHover(null)}
        >
          Art
        </motion.p>
      </div>
      <motion.div
        className={styles.aboutimg}
        initial={{ backgroundColor: "#131313" }} // Initial color
        animate={{
          backgroundColor: (() => {
            switch (hoveredItem) {
              case "Outdoor Rec":
                return "#4bf905";
              case "Traveling":
                return "#c8a59b";
              case "Fashion":
                return "#b4bfd3";
              case "Art":
                return "#c18a6a";
              default:
                return "#131313";
            }
          })(),
        }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default AboutDisplay;
