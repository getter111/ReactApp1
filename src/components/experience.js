import React from "react";

const Experience = (props) => {
  const { workInfo, handleChange } = props;

  return (
    <div>
      Work Experience
      <div className="exp-inputs">
        <label htmlFor="company">Company:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={workInfo.company}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={workInfo.position}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="tasks">Main Tasks:</label>
        <input
          type="text"
          id="tasks"
          name="tasks"
          value={workInfo.tasks}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="time">Time Worked:</label>
        <input
          type="text"
          id="time"
          name="timeWorked"
          value={workInfo.timeWorked}
          onChange={handleChange}
          required
        ></input>
      </div>
    </div>
  );
};

export default Experience;
