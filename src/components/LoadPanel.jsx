import React from "react";
import LoadListItem from "./LoadListItem";

const LoadPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <h3>Load</h3>

        {props.loadList.map((e, i) => {
          return (
            <LoadListItem
              listItem={e}
              key={i}
              returnImage={props.returnImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LoadPanel;
