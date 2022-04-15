import React from "react";
const PaintPot = (props) => {
  return (
    <>
      <div
        className={
          props.color === props.activeColor ? "activePaint" : "inactivePaint"
        }
        style={{ backgroundColor: props.color }}
        onClick={() => props.changeColor(props.color)}
      >
        a
      </div>
    </>
  );
};

export default PaintPot;
