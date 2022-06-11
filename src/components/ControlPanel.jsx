const ControlPanel = (props) => {
  return (
    <>
      <div className="topButton">LOAD</div>
      <div className="topButton" onClick={props.savePicture}>
        SAVE
      </div>
    </>
  );
};

export default ControlPanel;
