import React, { Component } from "react";
import "./SeeMore.css";
// COMPONENT
import Resume from "./Resume/Resume";
import Infos from "./Infos/Infos";
import Casting from "./Casting/Casting";
import "../components/CirclesSlides/CirclesSlide.scss";

class SeeMore extends Component {
  constructor(props) {
    super(props);
    // this.sysnopsis = React.createRef();
    // this.infos = React.createRef();
    // this.casting = React.createRef();
    this.state = {
      movie: [],
      imagesSlide: [],
      detailsWidget: {
        resume: true,
        infos: false,
        casting: false,

        design: true,
        gospel: false,
        coding: false,
        read: false
      }
    };
  }

  handleClick = name => {
    const detailsWidget = { ...this.state.detailsWidget };
    for (let key in detailsWidget) {
      detailsWidget[key] = false;
    }
    detailsWidget[name] = true;
    this.setState({ detailsWidget });
  };

  render() {
    const { detailsWidget } = this.state;
    console.log(this.state.detailsWidget);

    return (
      <React.Fragment>
        <section className="see-more infos infos-absolute">
          {/* <nav className="nav-infos">
                <ul className="center">
                  <li
                    ref={this.ShowContentSynopsis}
                    onClick={e => this.handleClick("resume")}
                    className="list-infos black"
                  >
                    Synopsis
                  </li>
                  <li
                    ref={this.ShowContentInfos}
                    onClick={e => this.handleClick("infos")}
                    className="list-infos black"
                  >
                    Infos
                  </li>
                  <li
                    ref={this.ShowContentCasting}
                    onClick={e => this.handleClick("casting")}
                    className="list-infos black"
                  >
                    Casting
                  </li>
                </ul>
              </nav> */}
          <div className="circles-content">
            <div className="circles">DE</div>
            <div className="links-name">DESIGN</div>
          </div>
          <div class="show-info">
            <Resume
              isDisplayed={detailsWidget.resume}
              resume={this.state.movie.synopsisEn}
            />
            {detailsWidget.infos && (
              <Infos
                infos={this.state.movie}
                average={this.state.movie.average}
                age={this.state.movie.age}
                productor={this.state.movie.productor}
              />
            )}
            {detailsWidget.casting && (
              <Casting
                casting={this.state.movie.casting}
                actor={this.state.movie.actors}
              />
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default SeeMore;
