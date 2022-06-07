const LogIn = (props) => {
  return (
    <>
      <div className="topButton" onClick={props.login}>
        LOG IN
      </div>
      <div className="topButton" onClick={props.createAccount}>
        CREATE ACCOUNT
      </div>
    </>
  );
};

export default LogIn;
