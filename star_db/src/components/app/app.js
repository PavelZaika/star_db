import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
 
import ErrorIndicator from "../error-indicator/";
import PeoplePage from "../people-page";

import "./app.css";
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="mx-5">
        <Header />
        <RandomPlanet />
        <div className="mb-2">
          <PeoplePage />
        </div>

      </div>
    );
  }
}
