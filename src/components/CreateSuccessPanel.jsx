import React from "react";
const CreateSuccessPanel = (props) => {
  return (
    <>
      <div className="popupOuter">
        <div className="popup">
          <p>Account creation successful.</p>
          <button onClick={props.closeWindow}>Close</button>
        </div>
      </div>
    </>
  );
};

export default CreateSuccessPanel;
