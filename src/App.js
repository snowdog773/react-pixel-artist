import React, { Component } from "react";
import axios from "axios";
import Container from "./components/Container.jsx";
import Pallette from "./components/Pallette.jsx";
import LoadSave from "./components/LoadSave.jsx";
import LoginPanel from "./components/LoginPanel.jsx";
import SavePanel from "./components/SavePanel.jsx";
import LoadPanel from "./components/LoadPanel.jsx";
import CreateAccountPanel from "./components/CreateAccountPanel.jsx";
import CreateSuccessPanel from "./components/CreateSuccessPanel.jsx";
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
    currentUser: "",
    currentId: null,

    savePanel: false,
    saveName: "",
    loadPanel: false,
    loadList: "",
    loginPanel: false,
    loginUsername: "",
    loginPassword: "",
    loginError: "",
    createAccountPanel: false,
    createSuccessPanel: false,
    createUsername: "",
    createPassword: "",
    createPasswordConfirm: "",
    createMessage: "",
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
    axios
      .post("http://127.0.0.1:6001/login", {
        username: this.state.loginUsername,
        password: this.state.loginPassword,
      })
      .then((res) => {
        res.data.status === 0
          ? this.setState({ loginError: res.data.error })
          : this.setState({
              loginError: "",
              currentUser: this.state.loginUsername,
              currentId: res.data.userId,
              loginPanel: false,
            });
      });
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
    this.state.createPassword !== this.state.createPasswordConfirm
      ? this.setState({
          createMessage: "passwords do not match, please try again",
        })
      : axios
          .post("http://127.0.0.1:6001/add", {
            username: this.state.createUsername,
            password: this.state.createPassword,
          })
          .then((res) => {
            console.log(res);
            res.data.errno === 1062
              ? this.setState({
                  createMessage:
                    "Sorry but that username is taken, please choose another",
                })
              : this.setState({
                  createMessage: "",
                  createAccountPanel: false,
                  createSuccessPanel: true,
                });
          });
  };

  closeWindow = () => this.setState({ createSuccessPanel: false });

  openSavePanel = () => this.setState({ savePanel: true });

  setSaveName = (input) => this.setState({ saveName: input });

  savePicture = () => {
    const picture = [...this.state.pixel].join(" ");
    axios
      .post("http://127.0.0.1:6001/savePicture", {
        userId: this.state.currentId,
        pictureName: this.state.saveName,
        pictureData: picture,
      })
      .then((res) => {
        alert("saved");
      });
    this.setState({ savePanel: false });
  };

  openLoadPanel = () => {
    axios
      .post("http://127.0.0.1:6001/loadPicture", {
        userId: this.state.currentId,
      })
      .then((res) => {
        this.setState({ loadPanel: true, loadList: res.data });
      });
  };

  returnImage = (name) => {
    axios
      .post("http://127.0.0.1:6001/returnImage", {
        name,
        userId: this.state.currentId,
      })
      .then((res) => {
        const newData = res.data.results[0].Data.split(" ");
        this.setState({ pixel: newData, loadPanel: false });
      });
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
          currentUser={this.state.currentUser}
          login={this.login}
          createAccount={this.createAccount}
          openSavePanel={this.openSavePanel}
          openLoadPanel={this.openLoadPanel}
        />
        {this.state.createAccountPanel && (
          <CreateAccountPanel
            setCreateUsername={this.setCreateUsername}
            setCreatePassword={this.setCreatePassword}
            setCreatePasswordConfirm={this.setCreatePasswordConfirm}
            submitCreate={this.submitCreate}
            createMessage={this.state.createMessage}
          />
        )}
        {this.state.loginPanel && (
          <LoginPanel
            setLoginUsername={this.setLoginUsername}
            setLoginPassword={this.setLoginPassword}
            submitLogin={this.submitLogin}
            loginError={this.state.loginError}
          />
        )}
        {this.state.savePanel && (
          <SavePanel
            savePicture={this.savePicture}
            setSaveName={this.setSaveName}
          />
        )}

        {this.state.loadPanel && (
          <LoadPanel
            loadList={this.state.loadList}
            returnImage={this.returnImage}
          />
        )}
        {this.state.createSuccessPanel && (
          <CreateSuccessPanel closeWindow={this.closeWindow} />
        )}

        <h1>Pixel Artist</h1>

        {this.state.currentUser ? (
          <p>Logged in as {this.state.currentUser}</p>
        ) : (
          <p>Not logged in</p>
        )}

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
