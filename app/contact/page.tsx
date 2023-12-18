"use client";
import Link from "next/link";
import styles from "./page.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactcard}>
        <div className={styles.title}>
          <p className="t1">Contact </p>
          <div className={styles.links}>
            <Link href="https://www.linkedin.com/in/matthew-bennett-bennett-592102252/">
              <p>LinkedIn </p>
            </Link>

            <Link href="mailto:trashlinkmain@gmail.com">
              <p>Gmail</p>
            </Link>
          </div>
        </div>
        <div className={styles.infosection}>
          <div>
            <p className="t1">Reach Out</p>
            <p className="m">Feel free to contact me for any inquires</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
