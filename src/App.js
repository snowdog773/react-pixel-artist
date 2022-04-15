import React, { Component } from "react";
import Container from "./Container.jsx";
import "./style.css";

class App extends Component {
  state = { pixel: new Array(400).fill("white") };

  paint = (position) => {
    const newPixel = [...this.state.pixel];
    newPixel[position] = 1;
    this.setState({ pixel: newPixel });
    console.log(`click`);
  };

  render() {
    return (
      <>
        <h1>Pixel Artist</h1>
        <Container pixel={this.state.pixel} paint={this.paint} />
      </>
    );
  }
}

export default App;
