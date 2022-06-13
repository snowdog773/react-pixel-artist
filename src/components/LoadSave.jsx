import React, { Component } from "react";
import ControlPanel from "./ControlPanel";
import LogIn from "./LogIn";
class LoadSave extends Component {
  state = {};
  render() {
    return (
      <div className="topBar">
        {this.props.currentUser ? (
          <ControlPanel
            openSavePanel={this.props.openSavePanel}
            openLoadPanel={this.props.openLoadPanel}
          />
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
