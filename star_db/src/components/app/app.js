import React, { Component } from "react";
import Header from "../header";

import ErrorIndicator from "../error-indicator/";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails from "../item-details/item-details";

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
    const { getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}></ItemDetails>
      
    );
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>
      </ItemDetails>
    );

    return (
      <div className="mx-5">
        <Header />

        <Row
            left={personDetails}
            right={starshipDetails} />
        {/* <RandomPlanet /> */}
        {/* <div className="mb-2">
          <PeoplePage />
        </div> */}
      </div>
    );
  }
}
