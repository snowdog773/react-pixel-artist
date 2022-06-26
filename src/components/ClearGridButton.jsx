import React from "react";
const ClearGridButton = (props) => {
  return (
    <div className="clearButton" onClick={props.openClearPanel}>
      Clear Grid
    </div>
  );
};

export default ClearGridButton;
