const LogoutPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.logoutPanel}>
            X
          </div>
        </div>
        <h3>Logout</h3>
        <p>Are you sure you wish to log out? Any unsaved work will be lost.</p>
        <button onClick={props.logout}>YES</button>
        <button onClick={props.logoutPanel}>NO</button>
      </div>
    </div>
  );
};

export default LogoutPanel;
