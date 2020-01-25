import React, { Component } from "react";
import Header from "../header";
import ErrorIndicator from "../error-indicator/";
import "./app.css";
import SwapiService from "../../services/swapi-service";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage,
  LoginPage
} from "../pages";
import { SwapiServiceProvider } from "../swapi-service-context/";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { StarshipDetails, PlanetDetails } from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false,
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.swapiService}>
        <Router>
          <div className="mx-5">
            <Header />
            <Switch>
              <Route
                path="/"
                render={() => (
                  <h2 className="text-center text-danger">Welcome to StarDB</h2>
                )}
                exact={true}
              />
              <Route path="/people/:id?" component={PeoplePage} />

              <Route path="/planets" component={PlanetsPage} exact />
              <Route
                path="/planets/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <PlanetDetails itemId={id} />;
                }}
              />

              <Route path="/starships" component={StarshipsPage} exact />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />

              <Route
                path="/login"
                render={() => {
                  return (
                    <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                  );
                }}
              />

              <Route
                path="/secret"
                render={() => {
                  return <SecretPage isLoggedIn={isLoggedIn} />;
                }}
              />

              {/* <Redirect to="/" /> */}

              <Route
                render={() => (
                  <h2 className="text-center text-danger">Page not found!</h2>
                )}
              />
            </Switch>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
