"use client";
import styles from "./contact.module.css";
import ContactCard from "./components/card";

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <ContactCard />
    </div>
  );
};
export default ContactPage;
