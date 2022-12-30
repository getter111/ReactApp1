import React from "react";

const DisplayForm = (props) => {
  const { generalInfo, eduInfo, workInfo } = props;

  return (
    <div className="preview">
      <div className="general">
        <header>General Info</header>
        <div> Name: {generalInfo.name}</div>
        <div>Email: {generalInfo.email}</div>
        <div>Phone: {generalInfo.phone}</div>
      </div>
      <div className="edu">
        <header>Education</header>
        <div> School: {eduInfo.education}</div>
        <div>Degree: {eduInfo.degree}</div>
      </div>
      <div className="work">
        <header>WorkExperience</header>
        <div> Company: {workInfo.company}</div>
        <div>Position: {workInfo.position}</div>
        <div>Tasks: {workInfo.tasks}</div>
        <div>TimeWorked: {workInfo.timeWorked}</div>
      </div>
    </div>
  );
};

export default DisplayForm;
