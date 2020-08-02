import React from "react";

const Resume = ({ img, txt }) => {
  return (
    <div>
      <img src={img} alt="design" className="hobbies-img" />
      <div className="time-to-read-hobbies left">
        <i className="far fa-clock orange"></i>
        <span className="orange"> 2 minutes de lecture</span>
      </div>
      <article className="block-txt-about-me justify">
        <p className="txt-hobbies-content">
          La tecture me permet de m'instruire et de m'évader dans le but
          d'élargir mon immagination et ma créativité.
        </p>
      </article>
    </div>
  );
};

export default Resume;
