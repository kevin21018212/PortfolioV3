import styles from "../../css/resumecluster/classes.module.css";
import ClassesCard from "./classescard";
import courseCategories from "@/app/data/coursecategories";

const ResumeClasses = () => {
  return (
    <div className={styles.classescontainer}>
      <div className={styles.classestitle}>
        <p>CLASSES</p>
        <p></p>
      </div>
      <div className={styles.cardcontainer}>
        {courseCategories.map((category, index) => (
          <ClassesCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default ResumeClasses;
