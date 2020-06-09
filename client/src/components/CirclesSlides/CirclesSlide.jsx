import React, { Component } from "react";
import "./CirclesSlide.scss";

export default class CirclesSlides extends Component {
  render() {
    const { circles = [], onclick } = this.props;

    const linksCircles = circles.map((circles, index) => {
      circles = circles.toUpperCase();
      const linksAccronyms = circles[0].concat(circles[1]);
      return (
        <div className="circles-content" onclick>
          <div className="circles" key={index}>
            {linksAccronyms}
          </div>
          <div className="links-name">{circles}</div>
        </div>
      );
    });

    return <div className="block-circles flex">{linksCircles}</div>;
  }
}
