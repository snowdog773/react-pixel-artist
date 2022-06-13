import React from "react";

const LoadPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <h3>Load</h3>
        <p className="alert">abc {props.loadList}</p>
      </div>
    </div>
  );
};

export default LoadPanel;
