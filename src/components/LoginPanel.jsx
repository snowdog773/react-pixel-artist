const LoginPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.closeWindow}>
            X
          </div>
        </div>
        <h3>Login</h3>
        <form className="form">
          <p className="alert">{props.loginError}</p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => props.setLoginUsername(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => props.setLoginPassword(e.target.value)}
          ></input>
        </form>
        <button onClick={props.submitLogin}>Submit</button>
      </div>
    </div>
  );
};

export default LoginPanel;
