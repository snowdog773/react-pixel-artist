import React from "react";
const Footer = (props) => {
  return (
    <div className="footer">
      {props.currentUser ? (
        <span>Logged in as {props.currentUser}</span>
      ) : (
        <span>Not logged in</span>
      )}

      <span>&copy;{new Date().getFullYear()} Jon Pitans</span>
    </div>
  );
};

export default Footer;
