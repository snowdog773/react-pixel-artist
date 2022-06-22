import React from "react";
const SavePanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.closeWindow}>
            X
          </div>
        </div>
        <h3>Save</h3>
        <form className="form">
          <label htmlFor="saveName">Name Your Masterpiece</label>
          <input
            type="text"
            name="saveName"
            id="saveName"
            onChange={(e) => props.setSaveName(e.target.value)}
            value={props.savePlaceholder}
            maxLength="20"
          ></input>
        </form>
        <button
          onClick={props.savePicture}
          disabled={props.saveName ? "" : "true"}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SavePanel;
