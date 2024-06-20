import Link from "next/link";
import styles from "./navbar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.redTriangle}></div>
      <div className={styles.linksContainer}>
        <div className={styles.firstLink}>
          <Link href="/">
            <p>HOME</p>
          </Link>
        </div>
        <div className={styles.secondLink}>
          <Link href="/projects">
            <p>WORKS</p>
          </Link>
        </div>
        <div className={styles.thirdLink}>
          <Link href="/resume">
            <p>RESUME</p>
          </Link>
        </div>
        <div className={styles.lastLink}>
          <Link href="/contact">
            <p>CONTACT</p>
          </Link>
        </div>
        <div className={styles.emptyLink}></div>
      </div>
    </div>
  );
};

export default NavBar;
