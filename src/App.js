import React, { Component } from "react";
import Container from "./Container.jsx";
import Pallette from "./Pallette.jsx";
import "./style.css";

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
  };

  paint = (position) => {
    const newPixel = [...this.state.pixel];
    newPixel[position] = this.state.activeColor;
    this.setState({ pixel: newPixel });
    console.log(`click`);
  };

  changeColor = (color) => {
    this.setState({ activeColor: color });
  };

  render() {
    return (
      <>
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
