import React, { Component } from "react";
import "./Skills.scss";
import CirclesSkills from "./CirclesSkills";
import BlockSkills from "./BlockSkills";

export default class Skills extends Component {
  render() {
    const { titleSection, txtSection, skills } = this.props;

    const skillsBlock = skills.map((skills, index) => {
      if (index % 2 === 0) {
        return (
          <BlockSkills
            key={index}
            acronym={skills.acronym}
            name={skills.name}
            levelStr={skills.levelStr}
          >
            <CirclesSkills
              maxCircles={5}
              level={skills.levelNum}
              colorsCircles="#fff"
            ></CirclesSkills>
          </BlockSkills>
        );
      } else {
        return (
          <BlockSkills
            key={index}
            acronym={skills.acronym}
            name={skills.name}
            levelStr={skills.levelStr}
          >
            <CirclesSkills
              maxCircles={5}
              level={skills.levelNum}
              colorsCircles="#ffea02"
            ></CirclesSkills>
          </BlockSkills>
        );
      }
    });

    return (
      <section
        className="section-padding section-skills center"
        id="section-skills"
      >
        <div className="container">
          <h2 className="title uppercase white">{titleSection}</h2>
          <div className="block-txt-section white">
            <p className="lighter">{txtSection}</p>
          </div>
          <div className="grid top">{skillsBlock}</div>
        </div>
      </section>
    );
  }
}
