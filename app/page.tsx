"use client";
import React, { useState, useEffect } from "react";
import Landing from "./homepage/components/landing/landing";
import NewProjects from "./homepage/components/newprojects/newprojects";
import styles from "./page.module.css";
import NewProjectsMobile from "./homepage/components/newprojects/mobile/newprojectsmobile";

export default function Home() {
  const [screenSize, setScreenSize] = useState("desktop"); // "desktop" or "mobile"

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
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
    <div className={styles.maincontent}>
      <div className={styles.landingcontainer}>
        <Landing />
      </div>
      <div className={styles.projectcontainer}>
        {screenSize === "mobile" ? <NewProjectsMobile /> : <NewProjects />}
      </div>
    </div>
  );
}
