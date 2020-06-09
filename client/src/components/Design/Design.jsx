import React from "react";

const Design = ({ img, txt, isDisplayed }) => {
  if (!isDisplayed) return null;
  return (
    <div>
      <img src={img} alt="design" className="hobbies-img" />
      <article className="block-txt-about-me justify">
        <p className="lighter">{txt}</p>
      </article>
    </div>
  );
};

export default Design;
