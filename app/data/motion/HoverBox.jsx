"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./hover.module.css";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const HoverBox = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = 250;

  return (
    <motion.div
      className={styles.mask}
      animate={{
        WebkitMaskPosition: `${x - size}px ${y - size - 75}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default HoverBox;
