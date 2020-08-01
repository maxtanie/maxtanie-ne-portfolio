import React, { Component } from "react";
import ContactForm from "./ContactForm";
import "./Contact.scss";

export default class Contact extends Component {
  render() {
    const { titleSection, txtSection } = this.props;
    return (
      <section className="section-padding" id="section-contact">
        <div className="container">
          <h1 className="title uppercase center">{titleSection}</h1>
          <div className="block-txt-section">
            <p className="lighter center">{txtSection}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    );
  }
}
