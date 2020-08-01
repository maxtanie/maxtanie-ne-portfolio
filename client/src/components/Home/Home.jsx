import React, { Component } from "react";
import Header from "../Header/Header";
import About from "../About/About";
import infos from "../../object/data.json";
import imgs from "../../images/about/profil-picture.jpg";
import CircleLinks from "../CirclesLinks/CircleLinks";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Nav from "../Nav/Nav";
import AboutReadMore from "../About/AboutReadMore/AboutReadMore2";
import AboutBlock from "../About/AboutBlock";
import Design from "../Portfolio/Design";
import AboutMe from "../About/AboutMe";

export default class Home extends Component {
  state = {
    infos: infos,
    about: infos.About,
    skills: infos.Skills,
    contact: infos.Contact
  };

  render() {
    const { about, skills, contact } = this.state;

    return (
      <React.Fragment>
        <Header />
        {/* <AboutReadMore /> */}
        <AboutMe />
        {/* <About
          imgAbout={imgs}
          titleSection={about.titleSection}
          txtSection={about.txtSection}
          aboutName={about.aboutName}
          aboutJob={about.aboutJob}
          txtAbout={about.txtAbout}
        >
          <CircleLinks circles={about.aboutLink} />
        </About> */}
        <Portfolio />
        <Skills
          titleSection={skills.titleSection}
          txtSection={skills.txtSection}
          skills={skills.skillsVals}
        />
        <Contact
          titleSection={contact.titleSection}
          txtSection={contact.txtSection}
        />
      </React.Fragment>
    );
  }
}
