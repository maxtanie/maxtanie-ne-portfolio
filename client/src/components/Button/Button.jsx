import React, { Component } from "react";
import "./Button.scss";

export default class Button extends Component {
  render() {
    const { btnName, width, background, color, mTop } = this.props;
    const styleBtn = {
      width: `${width}`,
      background: `${background}`,
      color: `${color}`,
      marginTop: `${mTop}px`
    };

    return (
      <div className={`btn uppercase`} style={styleBtn}>
        {btnName} &#8594;
      </div>
    );
  }
}
