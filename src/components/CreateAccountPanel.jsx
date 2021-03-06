const CreateAccountPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.closeWindow}>
            X
          </div>
        </div>
        <h3>Create Account</h3>
        <form className="form">
          <p className="alert">{props.createMessage}</p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => props.setCreateUsername(e.target.value)}
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => props.setCreatePassword(e.target.value)}
          ></input>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            onChange={(e) => props.setCreatePasswordConfirm(e.target.value)}
          ></input>
        </form>
        <button onClick={props.submitCreate}>Submit</button>
      </div>
    </div>
  );
};

export default CreateAccountPanel;
