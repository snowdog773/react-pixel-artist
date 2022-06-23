import React, { Component } from "react";
// import ControlPanel from "./ControlPanel";
// import LogIn from "./LogIn";
import Menu from "./Menu";
import Logo from "./Logo";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="topBar">
        <Logo />
        <Menu
          currentUser={this.props.currentUser}
          login={this.props.login}
          createAccount={this.props.createAccount}
          openSavePanel={this.props.openSavePanel}
          openLoadPanel={this.props.openLoadPanel}
          galleryView={this.props.galleryView}
          pictureView={this.props.pictureView}
          aboutPanel={this.props.aboutPanel}
          logoutPanel={this.props.logoutPanel}
        />
      </div>
    );
  }
}

export default Header;
