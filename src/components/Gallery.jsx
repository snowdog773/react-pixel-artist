import React, { Component } from "react";
import axios from "axios";
import { URL } from "../utils/constants";
import Thumbnail from "./Thumbnail";
class Gallery extends Component {
  state = { thumbnails: [] };
  componentDidMount() {
    axios.get(`${URL}galleryLatest`).then((res) => {
      console.log(res);
      this.setState({ thumbnails: res.data });
    });
  }

  render() {
    return (
      <>
        <h2>Gallery</h2>
        <div className="galleryWrapper">
          {this.state.thumbnails ? (
            this.state.thumbnails.map((e, index) => {
              return <Thumbnail item={e} key={index} />;
            })
          ) : (
            <p>waiting for data</p>
          )}
        </div>
      </>
    );
  }
}

export default Gallery;
