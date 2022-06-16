import React from "react";
const CreateSuccessPanel = (props) => {
  return (
    <>
      <div className="popupOuter">
        <div className="popup">
          <div className="closeButtonWrapper">
            <div className="closeButton" onClick={props.closeWindow}>
              X
            </div>
          </div>
          <p>Account creation successful.</p>
          <button onClick={props.closeWindow}>Close</button>
        </div>
      </div>
    </>
  );
};

export default CreateSuccessPanel;
