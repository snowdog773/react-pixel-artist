import React, { Component } from "react";
class Pixel extends Component {
  state = {};

  render() {
    return (
      <div
        className="pixel"
        style={{ backgroundColor: this.props.color }}
        // When the user first presses down:
        onMouseDown={(e) => {
          e.preventDefault(); // Prevents dragging the image
          this.props.mouseClicked(); // Tell App.js mouse is active
          this.props.paint(this.props.pos); // Paint this specific cell immediately
        }}
        // When the user slides into a new cell:
        onMouseEnter={() => {
          this.props.paint(this.props.pos); // App logic checks if mouseActive is true
        }}
        // Safety release:
        onMouseUp={this.props.mouseReleased}
      ></div>
    );
  }
}

export default Pixel;
