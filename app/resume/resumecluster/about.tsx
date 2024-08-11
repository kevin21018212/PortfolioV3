"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "@/styles/resume/resumecluster/about.module.scss"; // Ensure the correct extension
import { getImagePath } from "@/utils/functions";

const AboutDisplay = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = ["Outdoor", "Travel", "Fashion", "Art", "Music"];

  return (
    <motion.div className={styles.aboutdisplay}>
      <div className={styles.abouttext}>
        <h3>Extra</h3>
        {items.map((item, index) => (
          <motion.h5
            key={index}
            whileHover={{
              scale: 1.1,
              color: "#D7F227",
            }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}
          </motion.h5>
        ))}
      </div>
      {hoveredItem && (
        <motion.div
          key={hoveredItem}
          className={styles.aboutimg}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0.25, y: 20 }}
          transition={{ duration: 0.25 }}
          style={{
            backgroundImage: `url(${getImagePath(hoveredItem)})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </motion.div>
  );
};

export default AboutDisplay;
