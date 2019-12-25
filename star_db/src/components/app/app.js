import React, { Component } from "react";
import Header from "../header";

import ErrorIndicator from "../error-indicator/";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";

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
    const randomStarship = Math.floor(Math.random() * (37 - 1 + 1)) + 1;
    const randomPlanet = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const {
      getPerson,
      getStarship,
      getPlanet,
      getPersonImage,
      getStarshipImage,
      getPlanetImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={randomPerson} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender: " />
        <Record field="eyeColor" label="Eye Color: " />
      </ItemDetails>
    );
    const starshipDetails = (
      <ItemDetails
        itemId={randomStarship}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model: " />
        <Record field="length" label="Length: " />
        <Record field="costInCredits" label="Cost: " />
      </ItemDetails>
    );
    const PlanetDetails = (
      <ItemDetails
        itemId={randomPlanet}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      >
        <Record field="population" label="Population: " />
        <Record field="rotationPeriod" label="Rotation Period: " />
        <Record field="diameter" label="Diameter: " />
      </ItemDetails>
    );

    return (
      <div className="mx-5">
        <Header />

        <Row left={personDetails} right={starshipDetails} />
        <Row left={PlanetDetails}  />
        {/* <RandomPlanet /> */}
        {/* <div className="mb-2">
          <PeoplePage />
        </div> */}
      </div>
    );
  }
}
