import React, { Component } from "react";
import Header from "../header";
import ErrorIndicator from "../error-indicator/";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context/";

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
      <SwapiServiceProvider value={this.swapiService}>
        <div className="mx-5">
          <Header />

          <PeoplePage />
          <StarshipsPage />
          <PlanetsPage />
        </div>
      </SwapiServiceProvider>
    );
  }
}
