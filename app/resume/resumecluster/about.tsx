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
        <h4>Extra</h4>
        {items.map((item, index) => (
          <motion.p
            key={index}
            whileHover={{
              scale: 1.1,
              color: "#f39c12",
            }}
            onMouseEnter={() => setHoveredItem(item)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item}
          </motion.p>
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
