import styles from "../../css/resumecluster/classes.module.css";
import ClassesCard from "./classescard";
import courseCategories from "@/app/data/coursecategories";

const ResumeClasses = () => {
  return (
    <div className={styles.classescontainer}>
      <div className={styles.classestitle}>
        <h1>CLASSES</h1>
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
