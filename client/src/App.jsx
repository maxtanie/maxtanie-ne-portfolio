import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home/Home";
import AboutReadMore from "./components/About/AboutReadMore.jsx/AboutReadMore.jsx";
import PortfolioReadMore from "./components/Portfolio/PortfolioReadMore";
import Nav from "./components/Nav/Nav";
import ScrollUpButton from "react-scroll-up-button";
import AlphaVerse from "./components/AlphaVerse/AlphaVerse";
import ReadMore from "./components/Portfolio/ReadMore";
import More from "./components/Portfolio/More";
import Paginate from "./components/Portfolio/Paginate";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route className="App">
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about-read-more" exact component={AboutReadMore} />
            <Route path="/portfolio/:id" exact component={More} />
            <Route path="/alphaVerse" exact component={AlphaVerse} />
          </Switch>
        </Route>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType="easeOutCubic"
          AnimationDuration={500}
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
          style={{}}
          ToggledStyle={{}}
        />
      </div>
    );
  }
}

export default withRouter(App);
