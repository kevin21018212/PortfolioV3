"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Landing from "./homepage/landing";
import NewProjects from "./homepage/newprojects";
import NewProjectsMobile from "./homepage/newprojectsmobile";
import LandingMobile from "./homepage/landingMobile";
import BackgroundBeams from "@/utils/components/backgroundBeams";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1150);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    // Mobile
    return (
      <div className={styles.mobilePageContainer}>
        <LandingMobile />
        <div className={styles.mobileProjectContainer}>
          <NewProjectsMobile />
        </div>
      </div>
    );
  } else {
    // Desktop
    return (
      <div className={styles.pageContainer}>
        <div className={styles.landingContainer}>
          <Landing />
          <div className={styles.projectContainer}>
            <NewProjects />
          </div>
        </div>
        <BackgroundBeams className={styles.backgroundBeams} />
      </div>
    );
  }
}
