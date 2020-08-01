import React, { Component } from "react";
import imgProfil from "../../images/about/maxtanie.png";
import "./AboutMe.scss";

export default class AboutMe extends Component {
  render() {
    const { hideLink } = this.props;
    return (
      <section id="about-me">
        {/* <h2 className="title uppercase white center">About</h2>
        <p className="center white">
          Be passionated is something really amazing.
        </p> */}
        <div className="container-1200-px grid-1200-px" id="section-about">
          <div className="content-infos-about">
            <h2 className="title-about uppercase">À propos</h2>
            <div className="txt-about">
              <p class="txt-about-big-size">
                Webdesigner et développeuse front end junior située à Paris, je
                suis passionnée par ses deux univers totalement différents, mais
                complémentaires car ils sont sans limites et me permettent de
                donner vie à toutes mes inspirations.
              </p>
              <a
                href="/about-read-more"
                className={`link-decouvrir-plus ${hideLink}`}
              >
                Découvrir plus →
              </a>
            </div>
          </div>

          <div className="content-img-profil">
            <img
              className="img-profil"
              src={imgProfil}
              alt="Maxtanie smiling with a red pull"
            />
          </div>
        </div>
      </section>
    );
  }
}
