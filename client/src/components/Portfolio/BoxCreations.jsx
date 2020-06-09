import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import infos from "./infos";

export default class Box extends Component {
  state = {
    vals: infos,
    creations: ""
  };

  render() {
    const {
      id,
      image,
      alt,
      filterItem,
      titleCreations,
      title,
      shortDescription
    } = this.props;
    return (
      <div className={`filter-item  ${filterItem}`}>
        <div className="box-design">
          <a
            className="link-none"
            href={`/portfolio/${titleCreations.toLowerCase()}`}
          >
            <div className="block-img">
              <img src={image} alt={alt} />
            </div>
            <div className="block-content-txt">
              <h6 className="id">{id < 10 ? `0${id}` : `${id}`}</h6>
              <h4 className="creation-name center">{titleCreations}</h4>
              <p className="creation-list center">{title}</p>
              <p className="creation-infos center">{shortDescription}</p>
              <a
                className="link-read-more"
                href={`/portfolio/${titleCreations.toLowerCase()}`}
              >
                Read more...
              </a>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
