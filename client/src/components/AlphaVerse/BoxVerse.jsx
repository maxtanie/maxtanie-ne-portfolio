import React, { Component } from "react";
import "./AlphaVerse.scss";

export default class BoxVerse extends Component {
  render() {
    const { letter, verse, chosenVerse, arrayVerse, id, onClick } = this.props;
    return (
      <div className="block-verse" id={id}>
        <div className="flex-verse">
          <div className="letter">{letter}</div>
          <div className="verse">{verse}</div>
          <div className="random-block" id={id} onClick={onClick}></div>
        </div>
        <div className="block-quotation-verse" id="l">
          <q> {chosenVerse} </q>
        </div>
      </div>
    );
  }
}
