import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home/Home";

import Nav from "./components/Nav/Nav";
import ScrollUpButton from "react-scroll-up-button";
import More from "./components/Portfolio/More";
import AboutMeReadMore from "./components/About/AboutMeReadMore";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav />
        <Route>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about-read-more" exact component={AboutMeReadMore} />
            <Route path="/portfolio/:id" exact component={More} />
          </Switch>
        </Route>
        {/* <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType="easeOutCubic"
          AnimationDuration={500}
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
          style={{}}
          ToggledStyle={{}}
        /> */}
      </div>
    );
  }
}

export default withRouter(App);
