import React, { Component } from "react";
// import axios from "axios";
// import { URL } from "../utils/constants";
import Thumbnail from "./Thumbnail";
class Gallery extends Component {
  state = {};

  render() {
    return (
      <>
        <h2>
          {this.props.galleryDisplayedUser &&
            `${this.props.galleryDisplayedUser}'s `}
          Gallery
        </h2>

        <ul className="galleryWrapper">
          {this.props.thumbnails ? (
            this.props.thumbnails.map((e) => {
              return (
                <li className="thumbnailWrapper" key={e.ID}>
                  <Thumbnail data={e.Data} colors={this.props.colors} />
                  <h4>{e.Name}</h4>{" "}
                  <p>
                    by{" "}
                    <span
                      onClick={() => this.props.galleryByUsername(e.Username)}
                    >
                      {e.Username}
                    </span>
                  </p>
                  <div onClick={() => this.props.submitLike(e.ID)}>Like</div>
                  {`Liked ${e.Votes} times`}
                </li>
              );
            })
          ) : (
            <li>waiting for data</li>
          )}
        </ul>
      </>
    );
  }
}

export default Gallery;
