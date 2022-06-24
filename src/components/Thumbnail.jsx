import React, { Component } from "react";
class Thumbnail extends Component {
  state = {};
  render() {
    return (
      <div className="thumbnailImageWrapper">
        {this.props.data.split(",").map((e) => (
          <div
            className="thumbnailPixel"
            style={{ backgroundColor: this.props.colors[e] }}
          ></div>
        ))}
      </div>
    );
  }
}

export default Thumbnail;
