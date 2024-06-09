"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Landing from "./homepage/landing";
import NewProjects from "./homepage/newprojects";
import NewProjectsMobile from "./homepage/newprojectsmobile";

export default function Home() {
  const [screenSize, setScreenSize] = useState("desktop"); // "desktop" or "mobile"

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1150) {
        setScreenSize("mobile");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.landingContainer}>
        <Landing />
        <div className={styles.projectContainer}>
          {screenSize === "mobile" ? <NewProjectsMobile /> : <NewProjects />}
        </div>
      </div>
    </div>
  );
}
