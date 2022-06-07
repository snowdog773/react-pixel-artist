import React, { Component } from "react";
import Container from "./components/Container.jsx";
import Pallette from "./components/Pallette.jsx";
import LoadSave from "./components/LoadSave.jsx";
import LoginPanel from "./components/LoginPanel.jsx";
import CreateAccountPanel from "./components/CreateAccountPanel.jsx";
import "./styles/style.css";

class App extends Component {
  state = {
    pixel: new Array(400).fill("white"),
    colors: [
      "black",
      "white",
      "red",
      "green",
      "blue",
      "cyan",
      "yellow",
      "pink",
      "purple",
      "orange",
      "grey",
      "brown",
    ],
    activeColor: "black",
    loggedIn: false,
    loginPanel: false,
    createAccountPanel: false,
    loginUsername: "",
    loginPassword: "",
    createUsername: "",
    createPassword: "",
    createPasswordConfirm: "",
  };

  login = () => {
    this.setState({ loginPanel: true });
  };

  setLoginUsername = (input) => {
    this.setState({ loginUsername: input });
  };

  setLoginPassword = (input) => {
    this.setState({ loginPassword: input });
  };

  submitLogin = () => {
    console.log(
      "submitted " + this.state.loginUsername + this.state.loginPassword
    );
    this.setState({ loginPanel: false });
  };

  createAccount = () => {
    this.setState({ createAccountPanel: true });
  };

  setCreateUsername = (input) => {
    this.setState({ createUsername: input });
  };

  setCreatePassword = (input) => {
    this.setState({ createPassword: input });
  };

  setCreatePasswordConfirm = (input) => {
    this.setState({ createPasswordConfirm: input });
  };

  submitCreate = () => {
    console.log(
      "submitted " +
        this.state.createUsername +
        this.state.createPassword +
        this.state.createPasswordConfirm
    );
    this.setState({ createAccountPanel: false });
  };

  paint = (position) => {
    const newPixel = [...this.state.pixel];
    newPixel[position] = this.state.activeColor;
    this.setState({ pixel: newPixel });
    localStorage.setItem("current", JSON.stringify(this.state.pixel));
  };

  changeColor = (color) => {
    this.setState({ activeColor: color });
  };

  render() {
    return (
      <>
        <LoadSave
          loggedIn={this.state.loggedIn}
          login={this.login}
          createAccount={this.createAccount}
        />
        {this.state.createAccountPanel && (
          <CreateAccountPanel
            setCreateUsername={this.setCreateUsername}
            setCreatePassword={this.setCreatePassword}
            setCreatePasswordConfirm={this.setCreatePasswordConfirm}
            submitCreate={this.submitCreate}
          />
        )}
        {this.state.loginPanel && (
          <LoginPanel
            setLoginUsername={this.setLoginUsername}
            setLoginPassword={this.setLoginPassword}
            submitLogin={this.submitLogin}
          />
        )}

        <h1>Pixel Artist</h1>

        <Container pixel={this.state.pixel} paint={this.paint} />

        <Pallette
          colors={this.state.colors}
          changeColor={this.changeColor}
          activeColor={this.state.activeColor}
        />
      </>
    );
  }
}

export default App;
