import React from "react";
const LoadListItem = (props) => {
  return (
    <>
      <p
        className="loadListItem"
        onClick={() => props.returnImage(props.listItem)}
      >
        {props.listItem}
      </p>
    </>
  );
};

export default LoadListItem;
