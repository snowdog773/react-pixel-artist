import React, { Component } from "react";
class Pixel extends Component {
  state = {};

  render() {
    return (
      // Inside your Pixel component's render/return:
      <div
        className="pixel"
        style={{ backgroundColor: this.props.color }}
        onMouseDown={(e) => {
          e.preventDefault(); // Stop the "stop sign" cursor
          this.props.mouseClicked(); // Sets mouseActive to true for future moves
          this.props.paint(this.props.pos, true); // <--- FORCE the paint on click
        }}
        onMouseEnter={() => {
          this.props.paint(this.props.pos); // Normal behavior for dragging
        }}
      ></div>
    );
  }
}

export default Pixel;
