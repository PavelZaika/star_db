import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
// import ItemList from "../item-list";
// import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator/";
import PeoplePage from "../people-page";

import "./app.css";

export default class App extends Component {
  state = {
    hasError: false
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
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
