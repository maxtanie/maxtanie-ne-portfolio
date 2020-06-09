import React, { Component } from "react";
import "./CreationsPage2.scss";

export default class CreationsPage2 extends Component {
  render() {
    const { id, creationName, item, urlImg, alt, projLength } = this.props;
    return (
      <section className="creationsPage2">
        <div className="container-creations-2">
          <div className="arrow-content"></div>
          <div className="block-content">
            <div className="block-nb-id">
              <span className="id-project">
                {id >= 10 ? `${id}` : `0${id}`}
              </span>
              <span className="length-project">
                {projLength < 10 ? `/0${projLength}` : `/${projLength}`}
              </span>
            </div>
            <h2 className="creations-title">{creationName}</h2>
            <div className="container-creations-bis">
              <h6 className="creations-title-bis">{creationName}</h6>
              <p className="item-name">{item}</p>
              <div className="grid-creations-2 content-slide-img">
                <div className="infos-txt">{this.props.children}</div>
                <div className="content-img">
                  <img src={urlImg} alt={alt} />
                  <div className="block-btn">
                    <span className="btn-see-link">See the website</span>
                    <span className="btn-see-link">See the code</span>
                  </div>
                </div>
              </div>
              <img
                src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-Animated.gif"
                alt=""
              />
            </div>
          </div>
          <div className="arrow-content"></div>
        </div>
      </section>
    );
  }
}
