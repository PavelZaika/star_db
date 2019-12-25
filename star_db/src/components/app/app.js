import React, { Component } from "react";
import Header from "../header";
import ErrorIndicator from "../error-indicator/";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components";

import {SwapiServiceProvider} from '../swapi-service-context/'

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
    const randomPerson = Math.floor(Math.random() * (87 - 1 + 1)) + 1;
    const randomStarship = Math.floor(Math.random() * (32 - 1 + 1)) + 1;
    const randomPlanet = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (

      <SwapiServiceProvider value={this.swapiService}>
      <div className="mx-5">
        <Header />
        <div>
        <PersonDetails itemId={randomPerson} />
        <PersonList />
        </div>
        
        <div>
        <StarshipDetails itemId={randomStarship} />
        <StarshipList />
        </div>
        <div>
        <PlanetDetails itemId={randomPlanet} />
        <PlanetList />
        </div>
      </div>
      </SwapiServiceProvider>
    );
  }
}
