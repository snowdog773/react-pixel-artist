import React, { Component } from "react";
class Pixel extends Component {
  state = {};

  render() {
    return (
      <div
        className="pixel"
        style={{ backgroundColor: this.props.color }}
        onClick={() => this.props.paint(this.props.pos)}
        // onTouchStart={() => this.props.paint(this.props.pos)}
        // onMouseDown={this.props.mouseClicked}
        // onMouseUp={this.props.mouseReleased}
        // // onTouchStart={this.props.mouseClicked}
        // onTouchEnd={this.props.mouseReleased}
      ></div>
    );
  }
}

export default Pixel;
