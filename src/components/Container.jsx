import React from "react";
import Pixel from "./Pixel";

const Container = (props) => {
  return (
    <>
      <div className="container" /*  onMouseLeave={props.mouseReleased} */>
        {props.pixel.map((e, index) => (
          <Pixel
            color={e}
            key={index}
            pos={index}
            paint={props.paint}
            mouseClicked={props.mouseClicked}
            mouseReleased={props.mouseReleased}
          />
        ))}
      </div>
    </>
  );
};

export default Container;
