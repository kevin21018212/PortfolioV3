import styles from "../css/header.module.css";

const ResumeHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <p className="t2">Displayed here,is a slice of what I am capable of</p>
        <p className="t4">
          I am always looking for{" "}
          <strong className={styles.textGradient}>new opportinunites</strong>
        </p>
        <p className="t5">Text Version</p>
        <p></p>
      </div>
    </div>
  );
};
export default ResumeHeader;
