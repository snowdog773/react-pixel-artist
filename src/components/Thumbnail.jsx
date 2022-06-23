import React, { Component } from "react";
class Thumbnail extends Component {
  state = {};
  render() {
    return <>{this.props.item.Name}</>;
  }
}

export default Thumbnail;
