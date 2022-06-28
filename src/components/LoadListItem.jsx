import React from "react";
const LoadListItem = (props) => {
  return (
    <>
      <div className="loadListItem">
        <div
          className="loadFileName"
          onClick={() => props.returnImage(props.listItem)}
        >
          {props.listItem}
        </div>
        <div
          className="deleteButton"
          onClick={() => props.deleteWindow(props.listItem)}
        >
          <img
            src={require("../assets/deleteButton.png")}
            alt="Delete Button"
          ></img>
        </div>
      </div>
    </>
  );
};

export default LoadListItem;
