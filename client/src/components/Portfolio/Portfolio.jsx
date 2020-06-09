import React, { Component, useState, useEffect } from "react";
import Isotope from "isotope-layout";
import infos from "../../object/creations.json";
import "./Creations.scss";

import BtnCreations from "./BtnCreations";
import BoxCreations from "./BoxCreations";
import ButtonLink from "../ButtonLink/ButtonLink";

export default class Portfolio extends Component {
  state = {
    name: ["All", "Bootcamp", "Personal", "Logo", "Template"],
    filterName: ["*", "bootcamp", "personal", "logo", "template"]
  };
  render() {
    const { name, filterName } = this.state;

    return (
      <React.Fragment>
        <IsotopeReact name={name} filterName={filterName} />
      </React.Fragment>
    );
  }
}

const IsotopeReact = ({ name, filterName }) => {
  // initialize an Isotope object with configs
  // store the isotope object in one state
  const [isotope, setIsotope] = useState(null);
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".grid-creations", {
        itemSelector: ".filter-item"

        // layoutMode: "fitRows"
      })
      // layout mode options
    );
  }, []);

  // handling filter key change
  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const vals = infos.map((info, index) => {
    const pub = process.env.PUBLIC_URL;
    return (
      <BoxCreations
        key={index}
        id={info.id}
        filterItem={info.item}
        titleCreations={info.creationName}
        title={name[`${info.itemNumber}`]}
        shortDescription={info.shortDescription}
        image={`${pub}${info.urlImg}`}
        alt={info.alt}
      />
    );
  });
  return (
    <section
      className="section-padding portfolio-section"
      id="section-portfolio"
    >
      <div className="container">
        <h1 className="center title uppercase">Portfolio</h1>
        <div className="block-txt-section">
          <p className="lighter">Be passionate is something really amazing.</p>
        </div>
        <div className="flex space-between">
          {filterName.map((list, index) => {
            return (
              <div className="absolute-btn-creation">
                <BtnCreations
                  key={index}
                  btnFilter={name[index]}
                  onClick={() => setFilterKey(list)}
                ></BtnCreations>
              </div>
            );
          })}
        </div>
        <div className="container-design">
          <div className="grid-creations">{vals}</div>
        </div>
      </div>
    </section>
  );
};
