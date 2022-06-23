import React, { Component } from "react";
import hamburger from "../assets/Hamburger_icon.svg";
class Menu extends Component {
  state = { menuOpen: false };
  openMenu = () => {
    this.state.menuOpen
      ? this.setState({ menuOpen: false })
      : this.setState({ menuOpen: true });
  };
  render() {
    return (
      <div className="menuWrapper">
        <img
          src={hamburger}
          alt="drop down menu"
          className="hamburger"
          onClick={this.openMenu}
        />
        <div
          className={
            this.state.menuOpen
              ? "dropdownMenuVisible"
              : "dropdownMenuInvisible"
          }
        >
          <ul>
            {!this.props.currentUser && (
              <>
                <li
                  onClick={() => {
                    this.props.login();
                    this.setState({ menuOpen: false });
                  }}
                >
                  LOG IN
                </li>
                <li
                  onClick={() => {
                    this.props.createAccount();
                    this.setState({ menuOpen: false });
                  }}
                >
                  CREATE ACCOUNT
                </li>
              </>
            )}
            {this.props.currentUser && (
              <>
                <li
                  onClick={() => {
                    this.props.openLoadPanel();
                    this.setState({ menuOpen: false });
                  }}
                >
                  LOAD
                </li>
                <li
                  onClick={() => {
                    this.props.openSavePanel();
                    this.setState({ menuOpen: false });
                  }}
                >
                  SAVE
                </li>
              </>
            )}
            <li
              onClick={() => {
                this.props.pictureView();
                this.setState({ menuOpen: false });
              }}
            >
              DRAW PICTURE
            </li>
            <li
              onClick={() => {
                this.props.galleryView();
                this.setState({ menuOpen: false });
              }}
            >
              GALLERY
            </li>
            <li
              onClick={() => {
                this.props.aboutPanel();
                this.setState({ menuOpen: false });
              }}
            >
              ABOUT
            </li>
            {this.props.currentUser && (
              <li
                onClick={() => {
                  this.props.logoutPanel();
                  this.setState({ menuOpen: false });
                }}
              >
                LOG OUT
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
