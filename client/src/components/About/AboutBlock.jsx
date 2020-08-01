import React, { Component } from "react";

export default class AboutBlock extends Component {
  render() {
    const {
      imgAbout,
      txtSection,
      aboutName,
      aboutJob,
      aboutLink = [],
      txtAbout
    } = this.props;
    return (
      <section
        className="container section-padding section-about"
        id="section-about"
      >
        <h2 className="title uppercase ">About</h2>
        <div className="block-txt-section">
          <p className="lighter">{txtSection}</p>
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
            <div className="block-read-more right">{this.props.children}</div>

            <aside className="aside-hobbies">
              <h3>My Hobbies</h3>
              <p>Click on the circle to see my hobbies</p>
              <div className="block-circles flex">{this.props.children}</div>
            </aside>

            <aside>
              {this.props.children}
              {this.props.children}
              {this.props.children}
            </aside>

            <aside>{this.props.children}</aside>
          </div>
        </div>
      </section>
    );
  }
}
