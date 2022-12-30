import React from "react";

const Academic = (props) => {
  const { eduInfo, handleChange } = props;

  return (
    <div>
      Educational Experience
      <div className="edu-inputs">
        <label htmlFor="edu">Education</label>
        <input
          type="text"
          id="edu"
          name="education"
          value={eduInfo.education}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={eduInfo.degree}
          onChange={handleChange}
          required
        ></input>
      </div>
    </div>
  );
};

export default Academic;
