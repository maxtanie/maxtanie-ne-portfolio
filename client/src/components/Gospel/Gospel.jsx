import React from "react";

const Gospel = ({ urlVideo, txt }) => {
  return (
    <div>
      <iframe
        width="500"
        height="300"
        src={urlVideo}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <article className="block-txt-about-me justify">
        <p className="lighter">{txt}</p>
      </article>
    </div>
  );
};

export default Gospel;
