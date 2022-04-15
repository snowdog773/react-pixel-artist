import React from "react";
import Pixel from "./Pixel.jsx";

const Container = (props) => {
  return (
    <>
      <div className="container">
        {props.pixel.map((e, index) => (
          <Pixel color={e} key={index} pos={index} paint={props.paint} />
        ))}
      </div>
    </>
  );
};

export default Container;
