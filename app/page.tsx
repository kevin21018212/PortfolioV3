"use client";
import React from "react";
import { useIsMobile } from "@/utils/functions"; // Import your hook
import styles from "./page.module.css";
import Landing from "./homepage/landing";
import LandingMobile from "./homepage/landingMobile";
import NewProjects from "./homepage/newprojects";
import NewProjectsMobile from "./homepage/newprojectsmobile";
import BackgroundBeams from "@/utils/components/backgroundBeams";

const Home: React.FC = () => {
  const isMobile = useIsMobile(); // Use the hook

  if (isMobile == null) {
    return <div>Loading...</div>;
  }

  return isMobile ? (
    <div className={styles.mobilePageContainer}>
      <LandingMobile />
      <div className={styles.mobileProjectContainer}>
        <NewProjectsMobile />
      </div>
    </div>
  ) : (
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
};

export default Home;
