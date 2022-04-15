import React from "react";

const Pixel = (props) => {
  return (
    <>
      <div
        className="pixel"
        style={{ backgroundColor: props.color === 1 ? "black" : "white" }}
        onClick={() => props.paint(props.pos)}
      ></div>
    </>
  );
};

export default Pixel;
