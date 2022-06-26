import React from "react";
const ClearGridPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.openClearPanel}>
            X
          </div>
        </div>
        <h3>Clear Grid</h3>
        <p>
          Are you sure you wish to clear the grid? Any unsaved work will be
          lost.
        </p>
        <button onClick={props.clearGrid}>YES</button>
        <button onClick={props.openClearPanel}>NO</button>
      </div>
    </div>
  );
};

export default ClearGridPanel;
