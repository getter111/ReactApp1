import React from "react";

const General = (props) => {
  const { generalInfo, handleChange } = props;

  return (
    <div>
      General Information
      <div className="general-inputs">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={generalInfo.name}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={generalInfo.email}
          onChange={handleChange}
          required
        ></input>

        <label htmlFor="phone">Phone #:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={generalInfo.phone}
          onChange={handleChange}
          required
        ></input>
        {/* <p>{generalInfo.name}</p> */}
      </div>
    </div>
  );
};

export default General;
