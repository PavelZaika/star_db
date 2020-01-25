import React, { Component } from "react";
import Header from "../header";
import ErrorIndicator from "../error-indicator/";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context/";

import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  StarshipDetails,
  PlanetDetails,
  PersonDetails
} from "../sw-components";

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
        <Router>
          <div className="mx-5">
            <Header />

            <Route
              path="/"
              render={() => (
                <h2 className="text-center text-danger">Welcome to StarDB</h2>
              )}
              exact={true}
            />
            <Route path="/people" component={PeoplePage} exact />
            <Route
              path="/people/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <PersonDetails itemId = {id}/>;
              }}
            />

            <Route path="/planets" component={PlanetsPage} exact />
            <Route
              path="/planets/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <PlanetDetails itemId = {id}/>;
              }}
            />

            <Route path="/starships" component={StarshipsPage} exact />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <StarshipDetails itemId = {id}/>;
              }}
            />
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
