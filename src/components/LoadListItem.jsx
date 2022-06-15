import React from "react";
const LoadListItem = (props) => {
  return (
    <>
      <div>
        <span
          className="loadListItem"
          onClick={() => props.returnImage(props.listItem)}
        >
          {props.listItem}
        </span>
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
