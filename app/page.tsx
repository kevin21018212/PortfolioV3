import Landing from "./homepage/components/landing/landing";
import NewProjects from "./homepage/components/newprojects/newprojects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.maincontent}>
      <div className={styles.landingcontainer}>
        <Landing />
      </div>
      <div className={styles.projectcontainer}>
        <NewProjects />
      </div>
    </div>
  );
}
