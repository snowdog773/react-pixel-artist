import React from "react";
const SavePanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <h3>Save</h3>
        <form className="form">
          <label htmlFor="saveName">Name Your Masterpiece</label>
          <input
            type="text"
            name="saveName"
            id="saveName"
            onChange={(e) => props.setSaveName(e.target.value)}
          ></input>
        </form>
        <button onClick={props.savePicture}>Submit</button>;
      </div>
    </div>
  );
};

export default SavePanel;
