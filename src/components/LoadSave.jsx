import React, { Component } from "react";
import ControlPanel from "./ControlPanel";
import LogIn from "./LogIn";
class LoadSave extends Component {
  state = {};
  render() {
    return (
      <div className="topBar">
        {this.props.loggedIn ? (
          <ControlPanel />
        ) : (
          <LogIn
            login={this.props.login}
            createAccount={this.props.createAccount}
          />
        )}
      </div>
    );
  }
}

export default LoadSave;
