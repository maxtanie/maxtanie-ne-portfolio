import React from "react";

const Resume = ({ img, txt }) => {
  return (
    <div>
      <img src={img} alt="design" className="hobbies-img" />
      <article className="block-txt-about-me justify">
        <p className="lighter">{txt}</p>
      </article>
    </div>
  );
};

export default Resume;
