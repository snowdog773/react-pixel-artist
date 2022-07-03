import React, { Component } from "react";

import Head from "./components/Head";
import axios from "axios";
import Container from "./components/Container.jsx";
import Pallette from "./components/Pallette.jsx";
import Header from "./components/Header.jsx";
import LoginPanel from "./components/LoginPanel.jsx";
import SavePanel from "./components/SavePanel.jsx";
import OverwritePanel from "./components/OverwritePanel.jsx";
import LoadPanel from "./components/LoadPanel.jsx";
import DeletePanel from "./components/DeletePanel.jsx";
import CreateAccountPanel from "./components/CreateAccountPanel.jsx";
import CreateSuccessPanel from "./components/CreateSuccessPanel.jsx";
import Gallery from "./components/Gallery.jsx";
import AboutPanel from "./components/AboutPanel.jsx";
import LogoutPanel from "./components/LogoutPanel.jsx";
import Footer from "./components/Footer.jsx";
import ClearGridButton from "./components/ClearGridButton.jsx";

import { URL } from "./utils/constants";

import "./styles/style.css";
import "./styles/800pxStyle.css";
import ClearGridPanel from "./components/ClearGridPanel.jsx";

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
    mouseActive: false,
    currentUser: "",
    currentId: null,
    currentImageName: "",
    savePanel: false,
    saveName: "",
    savePlaceholder: "",
    overwritePanel: false,
    loadPanel: false,
    loadList: [],
    likeList: [],
    deleteWindow: false,
    toBeDeleted: "",
    loginPanel: false,
    logoutPanel: false,
    aboutPanel: false,
    clearPanel: false,
    loginUsername: "",
    loginPassword: "",
    loginError: "",
    createAccountPanel: false,
    createSuccessPanel: false,
    createUsername: "",
    createPassword: "",
    createPasswordConfirm: "",
    createMessage: "",
    galleryView: false,
    thumbnails: [],
    galleryDisplayedUser: "",
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
      .post(`${URL}login`, {
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
              loadList: [...new Set(res.data.name)],
              likeList: [...new Set(res.data.likes)],
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
          .post(`${URL}add`, {
            username: this.state.createUsername,
            password: this.state.createPassword,
          })
          .then((res) => {
            res.data.errno === 1062
              ? this.setState({
                  createMessage:
                    "Sorry but that username is taken, please choose another",
                })
              : this.setState({
                  createMessage: "",
                  createAccountPanel: false,
                  createSuccessPanel: true,
                  currentUser: this.state.createUsername,
                  currentId: res.data.insertId,
                });
          });
  };

  closeWindow = () =>
    this.setState({
      createSuccessPanel: false,
      createAccountPanel: false,
      loadPanel: false,
      loginPanel: false,
      savePanel: false,
    });

  openSavePanel = () => this.setState({ savePanel: true });

  setSaveName = (input) =>
    this.setState({ saveName: input, savePlaceholder: input });

  savePicture = () => {
    const picture = [...this.state.pixel];
    const numbers = picture.map((e) => this.state.colors.indexOf(e));

    const joined = numbers.join(",");
    // const output = JSON.stringify(joined);

    // numbers.replace("")
    this.state.loadList.includes(this.state.saveName)
      ? this.setState({ overwritePanel: true })
      : axios.post(`${URL}savePicture`, {
          userId: this.state.currentId,
          pictureName: this.state.saveName,
          pictureData: joined,
        });

    const newLoadList = [...this.state.loadList];
    newLoadList.push(this.state.saveName);
    this.setState({
      savePanel: false,
      currentImageName: this.state.saveName,
      savePlaceholder: this.state.saveName,
      loadList: newLoadList,
    });
  };

  overwritePicture = () => {
    const picture = [...this.state.pixel];
    const numbers = picture.map((e) => this.state.colors.indexOf(e));
    const joined = numbers.join(",");
    axios.post(`${URL}updatePicture`, {
      userId: this.state.currentId,
      pictureName: this.state.saveName,
      pictureData: joined,
    });

    this.setState({ savePanel: false, overwritePanel: false });
  };

  closeOverwriteWindow = () => {
    this.setState({ overwritePanel: false, savePanel: true });
  };

  openLoadPanel = () => {
    this.setState({ loadPanel: true });
  };

  returnImage = (name) => {
    axios
      .post(`${URL}returnImage`, {
        name,
        userId: this.state.currentId,
      })
      .then((res) => {
        const newNumbers = res.data.results[0].Data.split(",");
        const newData = newNumbers.map((e) => this.state.colors[e]);
        this.setState({
          pixel: newData,
          loadPanel: false,
          galleryView: false,
          currentImageName: name,
          savePlaceholder: name,
        });
      });
  };

  deleteWindow = (name) => {
    this.setState({ deleteWindow: true, toBeDeleted: name });
  };

  closeDeleteWindow = () => {
    this.setState({ deleteWindow: false, toBeDeleted: "" });
  };

  deletePicture = () => {
    axios.post(`${URL}deletePicture`, {
      userId: this.state.currentId,
      pictureName: this.state.toBeDeleted,
    });

    const newList = [...this.state.loadList];
    const index = newList.indexOf(this.state.toBeDeleted);
    newList.splice(index, 1);
    this.setState({ deleteWindow: false, loadList: newList });
  };

  galleryView = () => {
    axios.get(`${URL}galleryLatest`).then((res) => {
      this.setState({
        thumbnails: res.data,
        galleryView: true,
        galleryDisplayedUser: "",
      });
    });
  };

  galleryOldest = () => {
    axios.get(`${URL}galleryOldest`).then((res) => {
      this.setState({
        thumbnails: res.data,
        galleryView: true,
        galleryDisplayedUser: "",
      });
    });
  };

  galleryMostVotes = (timestamp = 0) => {
    axios.get(`${URL}galleryMostVotes?timestamp=${timestamp}`).then((res) => {
      this.setState({
        thumbnails: res.data,
        galleryView: true,
        galleryDisplayedUser: "",
      });
    });
  };

  galleryByUsername = (username) => {
    axios.get(`${URL}galleryByUsername?username=${username}`).then((res) => {
      this.setState({ thumbnails: res.data, galleryDisplayedUser: username });
    });
  };

  submitLike = (pictureID) => {
    axios
      .get(
        `${URL}submitLike?pictureID=${pictureID}&userID=${this.state.currentId}`
      )
      .then(this.state.likeList.push(pictureID));
  };

  rejectLike = () => {
    this.setState({
      loginPanel: true,
      loginError: "First login to leave a like",
    });
  };

  pictureView = () => {
    this.setState({ galleryView: false });
  };

  aboutPanel = () => {
    this.state.aboutPanel
      ? this.setState({ aboutPanel: false })
      : this.setState({ aboutPanel: true });
  };

  logoutPanel = () => {
    this.state.logoutPanel
      ? this.setState({ logoutPanel: false })
      : this.setState({ logoutPanel: true });
  };

  logout = () => {
    this.setState({
      currentUser: "",
      currentId: null,
      currentImageName: "",
      pixel: new Array(400).fill("white"),
      logoutPanel: false,
      loadList: [],
      likeList: [],
      savePlaceholder: "",
    });
  };

  openClearPanel = () => {
    this.state.clearPanel
      ? this.setState({ clearPanel: false })
      : this.setState({ clearPanel: true });
  };

  clearGrid = () => {
    this.setState({
      clearPanel: false,
      pixel: new Array(400).fill("white"),
      currentImageName: "",
      savePlaceholder: "",
    });
  };

  paint = (position) => {
    const newPixel = [...this.state.pixel];
    newPixel[position] = this.state.activeColor;
    /* this.state.mouseActive && */ this.setState({ pixel: newPixel });
    localStorage.setItem("current", JSON.stringify(this.state.pixel));
  };

  changeColor = (color) => {
    this.setState({ activeColor: color });
  };

  // mouseClicked = () => this.setState({ mouseActive: true });
  // mouseReleased = () => this.setState({ mouseActive: false });

  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <>
        <Head />

        <Header
          currentUser={this.state.currentUser}
          login={this.login}
          createAccount={this.createAccount}
          openSavePanel={this.openSavePanel}
          openLoadPanel={this.openLoadPanel}
          galleryView={this.galleryView}
          pictureView={this.pictureView}
          aboutPanel={this.aboutPanel}
          logoutPanel={this.logoutPanel}
        />
        {this.state.galleryView ? (
          <Gallery
            colors={this.state.colors}
            galleryView={this.galleryView}
            galleryOldest={this.galleryOldest}
            galleryMostVotes={this.galleryMostVotes}
            galleryDisplayedUser={this.state.galleryDisplayedUser}
            galleryByUsername={this.galleryByUsername}
            thumbnails={this.state.thumbnails}
            submitLike={this.submitLike}
            rejectLike={this.rejectLike}
            likeList={this.state.likeList}
            currentId={this.state.currentId}
          />
        ) : (
          <>
            <div className="containerWrapper">
              <Container
                pixel={this.state.pixel}
                paint={this.paint}
                mouseClicked={this.mouseClicked}
                mouseReleased={this.mouseReleased}
              />
              <p>{this.state.currentImageName}</p>
              <Pallette
                colors={this.state.colors}
                changeColor={this.changeColor}
                activeColor={this.state.activeColor}
              />
              <ClearGridButton openClearPanel={this.openClearPanel} />
            </div>
          </>
        )}

        {this.state.createAccountPanel && (
          <CreateAccountPanel
            setCreateUsername={this.setCreateUsername}
            setCreatePassword={this.setCreatePassword}
            setCreatePasswordConfirm={this.setCreatePasswordConfirm}
            submitCreate={this.submitCreate}
            createMessage={this.state.createMessage}
            closeWindow={this.closeWindow}
          />
        )}
        {this.state.loginPanel && (
          <LoginPanel
            setLoginUsername={this.setLoginUsername}
            setLoginPassword={this.setLoginPassword}
            submitLogin={this.submitLogin}
            loginError={this.state.loginError}
            closeWindow={this.closeWindow}
          />
        )}
        {this.state.savePanel && (
          <SavePanel
            savePicture={this.savePicture}
            setSaveName={this.setSaveName}
            closeWindow={this.closeWindow}
            saveName={this.state.saveName}
            savePlaceholder={this.state.savePlaceholder}
            currentImageName={this.state.currentImageName}
          />
        )}

        {this.state.overwritePanel && (
          <OverwritePanel
            overwritePicture={this.overwritePicture}
            closeOverwriteWindow={this.closeOverwriteWindow}
          />
        )}

        {this.state.loadPanel && (
          <LoadPanel
            loadList={this.state.loadList}
            returnImage={this.returnImage}
            deleteWindow={this.deleteWindow}
            closeWindow={this.closeWindow}
          />
        )}

        {this.state.deleteWindow && (
          <DeletePanel
            deletePicture={this.deletePicture}
            closeDeleteWindow={this.closeDeleteWindow}
            toBeDeleted={this.state.toBeDeleted}
          />
        )}
        {this.state.createSuccessPanel && (
          <CreateSuccessPanel closeWindow={this.closeWindow} />
        )}
        {this.state.aboutPanel && <AboutPanel aboutPanel={this.aboutPanel} />}
        {this.state.logoutPanel && (
          <LogoutPanel logoutPanel={this.logoutPanel} logout={this.logout} />
        )}
        {this.state.clearPanel && (
          <ClearGridPanel
            clearGrid={this.clearGrid}
            openClearPanel={this.openClearPanel}
          />
        )}
        <Footer currentUser={this.state.currentUser} />
      </>
    );
  }
}

export default App;
