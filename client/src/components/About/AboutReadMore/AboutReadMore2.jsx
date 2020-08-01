import React, { Component } from "react";
import infos from "../../../object/data.json";
import CircleLinks from "../../CirclesLinks/CircleLinks.jsx";
import CirclesSlides from "../../CirclesSlides/CirclesSlide.jsx";
import Design from "../../Design/Design.jsx";
import Gospel from "../../Gospel/Gospel.jsx";
import Coding from "../../Coding/Coding.jsx";
import Read from "../../Read/Read.jsx";
import "../../CirclesLinks/CircleLinks.scss";
import { Link } from "react-router-dom";
import "../About.scss";

export default class AboutReadMore extends Component {
  state = {
    infos: infos,
    about: infos.About,
    hobbies: infos.Hobbies,
    detailsWidget: {
      design: true,
      gospel: false,
      coding: false,
      read: false
    }
  };

  handleClick = name => {
    const detailsWidget = { ...this.state.detailsWidget };
    for (let key in detailsWidget) {
      detailsWidget[key] = false;
    }
    detailsWidget[name] = true;
    this.setState({ detailsWidget });
  };

  render() {
    const { about, hobbies, detailsWidget } = this.state;

    //HobbiesLink array
    const hobbiesLink = hobbies.hobbiesLink;

    // Variable who'll stock our hobbies links
    const circlesHobbies = hobbiesLink.map((lists, index) => {
      const listsUpper = lists.toUpperCase();
      return (
        <div
          key={index}
          className="circles-content"
          onClick={e => this.handleClick(`${lists.toLowerCase()}`)}
        >
          <div className="circles">{listsUpper[0].concat(listsUpper[1])}</div>
          <div className="links-name">{listsUpper}</div>
        </div>
      );
    });

    // Variable who'll stock our slide of hobbies
    const dotsSlide = hobbiesLink.map((lists, index) => {
      return (
        <span
          key={index}
          className="dots"
          onClick={e => this.handleClick(`${lists.toLowerCase()}`)}
        ></span>
      );
    });

    return (
      <section
        className="container section-padding section-about"
        id="section-about"
      >
        <h2 className="title uppercase">About</h2>
        <div className="block-txt-section">
          <p className="lighter">{about.txtSection}</p>
        </div>
        <div className="content-about">
          <div className="block-img-about">
            <img
              src="https://i.pinimg.com/originals/18/00/f4/1800f40547e64d61c52a26a172a5130d.jpg"
              alt=""
            />
          </div>
          <div className="block-about-infos">
            <div className="about-name">
              <h3 className="uppercase">{about.aboutName}</h3>
            </div>
            <div className="about-job">
              <h6 className="capitalize normal">{about.aboutJob}</h6>
            </div>
            <div className="center circles-block">
              <CircleLinks circles={about.aboutLink} />
            </div>
            <article className="block-txt-about-me justify">
              <p className="lighter">{about.txtAbout}</p>
            </article>

            <aside className="aside-hobbies">
              <h3>My Hobbies</h3>
              <p className="normal">Click on the circle to see my hobbies</p>
              <div className="block-circles flex">{circlesHobbies}</div>
            </aside>

            <aside>
              <Design
                isDisplayed={detailsWidget.design}
                img={hobbies.Design.img}
                txt={hobbies.Design.txt}
              />
              {detailsWidget.gospel && (
                <Gospel
                  urlVideo={hobbies.Gospel.urlVideo}
                  txt={hobbies.Gospel.txt}
                />
              )}
              {detailsWidget.coding && (
                <Coding img={hobbies.Coding.img} txt={hobbies.Coding.txt} />
              )}
              {detailsWidget.read && (
                <Read img={hobbies.Read.img} txt={hobbies.Read.txt} />
              )}
            </aside>

            <aside>{dotsSlide}</aside>
          </div>
        </div>
      </section>
    );
  }
}
