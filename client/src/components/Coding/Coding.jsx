import React from "react";

const Coding = ({ img, txt }) => {
  return (
    <div>
      <img src={img} alt="" className="hobbies-img" />
      <article className="block-txt-about-me justify">
        <p className="lighter">{txt}</p>
      </article>
    </div>
  );
};

export default Coding;
