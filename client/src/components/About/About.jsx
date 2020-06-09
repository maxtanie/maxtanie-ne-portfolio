import React, { Component } from "react";
import { Link } from "react-router-dom";
import imgs from "../../images/header/bg-header.png";
import "./About.scss";

export default class About extends Component {
  render() {
    const {
      imgAbout,
      txtSection,
      aboutName,
      aboutJob,
      aboutLink = [],
      txtAbout
    } = this.props;

    const socialLink = aboutLink.map((links, index) => {
      return (
        <span className="circle-social-link" key={index}>
          {links}
        </span>
      );
    });

    console.log(this.state);

    return (
      <section className="section-padding section-about" id="section-about">
        <div className="container-ab">
          <h2 className="title uppercase white-vals">About</h2>
          <div className="block-txt-section">
            <p className="lighter white-val">{txtSection}</p>
          </div>
          <div className="content-about">
            <div className="block-img-about">
              <img src={imgAbout} alt="" />
            </div>
            <div className="block-about-infos">
              <div className="about-name">
                <h3 className="uppercase">{aboutName}</h3>
              </div>
              <div className="about-job">
                <h6 className="capitalize normal">{aboutJob}</h6>
              </div>
              <div className="center circles-block">{this.props.children}</div>
              <article className="block-txt-about-me justify">
                <p className="lighter">{txtAbout}</p>
              </article>
              <div className="block-read-more right">
                <Link
                  to="/about-read-more"
                  className="read-more none green-dark-color"
                >
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
