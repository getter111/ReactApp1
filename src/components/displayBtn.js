import React from "react";

const displayBtn = (props) => {
  const { handleClick, display } = props;

  return (
    <div>
      <button className="display-btn" type="button" onClick={handleClick}>
        {display ? "Hide Form" : "Display Form"}
      </button>
    </div>
  );
};
export default displayBtn;
