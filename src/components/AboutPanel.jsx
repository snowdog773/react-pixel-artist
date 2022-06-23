const AboutPanel = (props) => {
  return (
    <div className="popupOuter">
      <div className="popup">
        <div className="closeButtonWrapper">
          <div className="closeButton" onClick={props.aboutPanel}>
            X
          </div>
        </div>
        <h3>About</h3>
        <section>
          <p>
            {" "}
            20 squared is a fun creative game where you are given a 20 x 20 grid
            of pixels and a pallette of basic colours and are challenged to
            create the best works of art you can.{" "}
          </p>
          <p>
            From simplicity comes greatness, and this is as simple as it gets.
            Create masterpieces, share them with your friends, vote for your
            favorites, and most of all, have fun.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPanel;
