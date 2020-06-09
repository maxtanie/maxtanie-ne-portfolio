import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

export default class Header extends Component {
  render() {
    return (
      <header className="bg-header">
        <div className="container-header  center absolute-center">
          <h1 className="title orange">Hello,</h1>
          <p className="txt">
            My name is <b>Maxtanie Petit Dol</b> a 24 years old{" "}
            <b>Web Designer</b>
            <br />
            and <b>Front-End Developer.</b>
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
