import styles from "../css/cluster.module.css";
import ResumeClasses from "./resumecluster/classes";
import ResumeWork from "./resumecluster/work";

const ResumeCluster = () => {
  return (
    <div className={styles.clustercontainer}>
      <ResumeWork />
      <ResumeClasses />
    </div>
  );
};

export default ResumeCluster;
