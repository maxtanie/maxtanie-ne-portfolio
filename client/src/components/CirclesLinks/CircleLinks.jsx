import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CircleLinks.scss";

export default class CircleLinks extends Component {
  render() {
    const {
      circles = [],
      links = ["/about-read-more", "/", "/about-read-more"]
    } = this.props;

    const linksCircles = circles.map((circles, index) => {
      circles = circles.toUpperCase();
      const linksAccronyms = circles[0].concat(circles[1]);
      return (
        <Link to={links[`${index}`]} key={index} className="none">
          <div className="circles-content">
            <div className="circles">{linksAccronyms}</div>
            <div className="links-name">{circles}</div>
          </div>
        </Link>
      );
    });

    return <div className="block-circles flex ">{linksCircles}</div>;
  }
}
