import React, { Component } from "react";
import "./CreationsPage.scss";

export default class CreationsPage extends Component {
  render() {
    const { id, creationName, item, urlImg, alt } = this.props;
    return (
      <section className="creationsPage">
        <div className="block-presentation-creations">
          <h5 className="id">{id}</h5>
          <h4 className="title-creations">{creationName}</h4>
          <div className="creation-miniature">
            <img src={urlImg} alt={alt} className="img-miniature" />
          </div>
          <p className="item-creations">{item}</p>
        </div>
        <div className="container-creations grid-creations gap-creations">
          <div className="infos-creations">{this.props.children}</div>
          <div className="full-img-creations">
            <img src={urlImg} alt={alt} className="img-creations" />
          </div>
        </div>
      </section>
    );
  }
}
