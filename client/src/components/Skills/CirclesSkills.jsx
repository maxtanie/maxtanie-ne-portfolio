import React, { Component } from "react";

export default class CirclesSkills extends Component {
  render() {
    const { maxCircles, level, colorsCircles } = this.props;

    // Style for change the color of my circles
    const colors = {
      background: `${colorsCircles}`
    };

    const Circles = () => {
      // Get the number of circles
      let numbersCircles = [...Array(maxCircles).keys()];

      // Empty array to stock numbers
      let tabCircles = [];

      // Loop inside them and push numbers inside the array
      for (let i in numbersCircles) {
        tabCircles.push(numbersCircles[i]);
      }

      // Map inside my array and change numbers into css circles
      const circlesLists = tabCircles.map(index => {
        if (index < level) {
          return (
            <React.Fragment>
              <span
                className={`circle-skills circles-actived`}
                key={index}
                style={colors}
              ></span>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <span
                className={`circle-skills`}
                key={index}
                style={colors}
              ></span>
            </React.Fragment>
          );
        }
      });

      // Return the list of my circles
      return circlesLists;
    };

    return (
      <section>
        <Circles />
      </section>
    );
  }
}
