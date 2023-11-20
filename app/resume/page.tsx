"use client";
import ResumeCluster from "./components/cluster";
import ResumeHeader from "./components/header";
import SkillSlider from "./components/skillslider";
import "./resume.css";

const ResumePage = () => {
  return (
    <div className="resumeContainer">
      <ResumeHeader />
      <SkillSlider />
      <ResumeCluster />
    </div>
  );
};
export default ResumePage;
