import React, { Component } from "react";
// import axios from "axios";
// import { URL } from "../utils/constants";
import Thumbnail from "./Thumbnail";
import Likes from "./Likes";
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
        <div className="orderLinks">
          <div onClick={this.props.galleryView}>Latest</div> |{" "}
          <div onClick={this.props.galleryOldest}>Oldest</div> |{" "}
          <div onClick={this.props.galleryMostVotes}>Most Votes</div> |{" "}
          <div
            onClick={() =>
              this.props.galleryMostVotes(new Date().setHours(-168, 0, 0, 0))
            }
          >
            Most Votes This Week
          </div>
          |{" "}
          <div
            onClick={() =>
              this.props.galleryMostVotes(new Date().setHours(0, 0, 0, 0))
            }
          >
            Most Votes Today
          </div>
        </div>

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
                      className="usernameLink"
                      onClick={() => this.props.galleryByUsername(e.Username)}
                    >
                      {e.Username}
                    </span>
                  </p>
                  <Likes
                    ID={e.ID}
                    votes={e.Votes}
                    submitLike={this.props.submitLike}
                    likeList={this.props.likeList}
                  />
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
