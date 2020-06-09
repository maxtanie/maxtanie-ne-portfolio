import React, { Component } from "react";

export default class BlockSkills extends Component {
  render() {
    const { acronym, name, levelStr } = this.props;
    return (
      <article className="block-skills uppercase">
        <div className="grid"></div>
        <div className="circle-acronym">{acronym}</div>
        <div className="content-infos">
          <div className="name-skills ">{name}</div>
          {this.props.children}
          <div className="level-str">{levelStr}</div>
        </div>
      </article>
    );
  }
}
