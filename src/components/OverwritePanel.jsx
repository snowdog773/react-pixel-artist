import React from "react";
const OverwritePanel = (props) => {
  return (
    <div className="popupOuter overwrite">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.closeOverwriteWindow}>
            X
          </div>
        </div>
        <h3>Overwrite</h3>
        <p>A project of that name already exists. Do you wish to overwrite?</p>
        <button onClick={props.overwritePicture}>YES</button>
        <button onClick={props.closeOverwriteWindow}>NO</button>
      </div>
    </div>
  );
};

export default OverwritePanel;
