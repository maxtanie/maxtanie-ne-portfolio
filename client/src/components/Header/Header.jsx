import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

export default class Header extends Component {
  render() {
    return (
      <header id="bg-header">
        <div className="container-700-px center absolute-center">
          <h1 className="title orange orange-triangle">Hello,</h1>
          <p className="txt-header">
            Je m'appelle <b>Maxtanie Petit Dol, </b> j'ai 24 ans, je suis un
            <b> Webdesigner</b>
            <br />
            et <b>une développeuse front end junior</b> située à Paris.
          </p>
          <Link className="decoration-none center">
            <Button
              width="190px"
              background="#FC3000"
              color="#fff"
              btnName="My Resume"
              mTop="55"
            />
          </Link>
        </div>
      </header>
    );
  }
}
