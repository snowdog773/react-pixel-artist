import React from "react";
import PaintPot from "./PaintPot";

const Pallette = (props) => {
  return (
    <>
      <div className="pallette">
        {props.colors.map((e, index) => {
          return (
            <PaintPot
              color={e}
              key={index}
              changeColor={props.changeColor}
              activeColor={props.activeColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Pallette;
