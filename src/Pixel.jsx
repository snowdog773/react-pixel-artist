import React from "react";

const Pixel = (props) => {
  return (
    <>
      <div
        className="pixel"
        style={{ backgroundColor: props.color }}
        onClick={() => props.paint(props.pos)}
      ></div>
    </>
  );
};

export default Pixel;
