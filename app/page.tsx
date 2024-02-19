"use client";
import React, { useState, useEffect } from "react";
import NewProjects from "./homepage/components/newprojects";
import styles from "./page.module.css";
import Landing from "./homepage/components/landing";
import NewProjectsMobile from "./homepage/components/newprojectsmobile";

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
    <div className="pageContainer">
      <div className={styles.landingcontainer}>
        <Landing />
        <div className={styles.projectcontainer}>
          {screenSize === "mobile" ? <NewProjectsMobile /> : <NewProjects />}
        </div>
      </div>
    </div>
  );
}
