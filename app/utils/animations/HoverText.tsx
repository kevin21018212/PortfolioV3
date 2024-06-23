import React, { useState } from "react";
import { motion } from "framer-motion";

const HoverText: React.FC<any> = ({ children }) => {
  /** const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  } */

  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const variants = {
    default: {
      height: "auto",
      width: "auto",
      backgroundColor: "transparent",
      color: "#000",
    },
    text: {
      height: "auto",
      width: "auto",
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      className="hover-text"
      //   variants={variants}
      initial="default"
      whileHover="text"
      onMouseEnter={textEnter}
      onMouseLeave={textLeave}
    >
      <div>
        <span>{children}</span>
      </div>
    </motion.div>
  );
};

export default HoverText;
