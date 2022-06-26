import React, { Component } from "react";
class Likes extends Component {
  state = { votes: this.props.votes };

  createLike = (ID) => {
    this.props.submitLike(ID);
    this.setState({ votes: this.state.votes + 1 });
  };

  render() {
    return (
      <div className="likeWrapper">
        {this.props.likeList.includes(this.props.ID) ? (
          <div className="likeButtonLiked">Liked</div>
        ) : (
          <div
            className="likeButton"
            onClick={() => this.createLike(this.props.ID)}
          >
            Like
          </div>
        )}
        <div>{`${this.state.votes} likes`}</div>
      </div>
    );
  }
}

export default Likes;
