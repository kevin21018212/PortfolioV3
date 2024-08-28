"use client";
import styles from "./page.module.css";
import Landing from "./homepage/landing";
import NewProjects from "./homepage/newprojects";
import NewProjectsMobile from "./homepage/newprojectsmobile";
import LandingMobile from "./homepage/landingMobile";
import BackgroundBeams from "@/utils/components/backgroundBeams";
import { useIsMobile } from "@/utils/functions";

export default function Home() {
  const isMobile = useIsMobile();

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
}
