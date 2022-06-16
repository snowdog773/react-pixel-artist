import React from "react";
import LoadListItem from "./LoadListItem";

const LoadPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.closeWindow}>
            X
          </div>
        </div>
        <h3>Load</h3>

        {props.loadList.map((e, i) => {
          return (
            <LoadListItem
              listItem={e}
              key={i}
              returnImage={props.returnImage}
              deleteWindow={props.deleteWindow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LoadPanel;
