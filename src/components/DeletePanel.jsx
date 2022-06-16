import React from "react";
const DeletePanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.closeDeleteWindow}>
            X
          </div>
        </div>
        <h3>Delete</h3>
        <p>Do you really want to delete {props.toBeDeleted}</p>
        <button onClick={props.deletePicture}>YES</button>
        <button onClick={props.closeDeleteWindow}>NO</button>
      </div>
    </div>
  );
};

export default DeletePanel;
