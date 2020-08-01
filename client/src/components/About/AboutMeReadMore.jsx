import React, { Component } from "react";
import "./AboutMeReadMore.scss";
import AboutMe from "./AboutMe";
import AboutReadMore from "./AboutReadMore/AboutReadMore";

export default class AboutMeReadMore extends Component {
  render() {
    return (
      <section id="about-me-read-more">
        <AboutMe hideLink="none" />
        <article id="mes-atouts">
          <div className="container-atouts">
            <div className="block-atouts">
              <img
                className="img-atouts"
                src="https://domains.google/static/images/homepage/hero-2.png"
                alt=""
              />
            </div>
            <div className="block-atouts padding-block-atout">
              <h2 className="uppercase title blue">Mes atouts</h2>
              <div className="time-to-read left">
                <i className="far fa-clock orange"></i>
                <span className="orange"> 40 secondes de lecture</span>
              </div>
              {/* <p className="center blue">
                La connaissance est un trésor qu'il faut chérir et cultiver
              </p> */}
              <p className="txt-atouts blue auto">
                Je peux me décrire comme étant une personne persistante
                determinée et perseverante. Je suis également capable de mener
                un projet de A à Z c'est à dire de l'arboresence, le wireframe,
                la charte graphique, maquette fonctionnelle et maquette finale.
                Pour enfin matérialiser toute cette partie graphique et
                ergonomique en language informatique au travers de
                l'intégration. Je peux également dire de moi, que je touche à
                tout car j'ai constamment soif de savoir, sans oublier que j'ai
                un grand sens des détails.
              </p>
            </div>
          </div>
        </article>

        <article id="hobbies">
          <div className="container-atouts  gap-30-px">
            <div className="content-hobbies">
              <h2 className="title uppercase blue">Mes intérêts</h2>
              <p className="blue txt-intro-hobbies">
                De manière quotidienne j'ai divers intérêts cependant je vous
                introduit en partie mes principaux afin d'en apprendre davantage
                sur moi et sur ma personnalité, bonne lecture :)
              </p>
            </div>

            <AboutReadMore />
          </div>
        </article>
      </section>
    );
  }
}
