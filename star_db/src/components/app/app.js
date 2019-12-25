import React, { Component } from "react";
import Header from "../header";

import ErrorIndicator from "../error-indicator/";

import "./app.css";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
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
    const randomPerson = Math.floor(Math.random() * (87 - 1 + 1)) + 1;
    const randomStarship = Math.floor(Math.random() * (32 - 1 + 1)) + 1;
    const randomPlanet = Math.floor(Math.random() * (61 - 1 + 1)) + 1;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    // const {
    //   getPerson,
    //   getStarship,
    //   getPlanet,
    //   getPersonImage,
    //   getStarshipImage,
    //   getPlanetImage
    // } = this.swapiService;

    // const personDetails = (
    //   <ItemDetails
    //     itemId={randomPerson}
    //     getData={getPerson}
    //     getImageUrl={getPersonImage}
    //   >
    //     <Record field="gender" label="Gender: " />
    //     <Record field="eyeColor" label="Eye Color: " />
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={randomStarship}
    //     getData={getStarship}
    //     getImageUrl={getStarshipImage}
    //   >
    //     <Record field="model" label="Model: " />
    //     <Record field="length" label="Manufacturer: " />
    //     <Record field="manufacturer" label="Length: " />
    //     <Record field="costInCredits" label="Cost: " />
    //     <Record field="crew" label="Crew: " />
    //     <Record field="passengers" label="Passengers: " />
    //     <Record field="cargoCapacity" label="Cargo Capacity: " />
    //     <Record field="hyperdriveRating" label="Hyperdrive Rating: " />
    //     <Record field="starshipClass" label="Starship Class: " />
    //   </ItemDetails>
    // );
    // const PlanetDetails = (
    //   <ItemDetails
    //     itemId={randomPlanet}
    //     getData={getPlanet}
    //     getImageUrl={getPlanetImage}
    //   >
    //     <Record field="population" label="Population: " />
    //     <Record field="rotationPeriod" label="Rotation Period: " />
    //     <Record field="diameter" label="Diameter: " />
    //   </ItemDetails>
    // );

    return (
      <div className="mx-5">
        <Header />

        <PersonDetails itemId={randomPerson} />

        {/* <PersonList >
        {({name}) => <span>{name}</span>}
         </PersonList> */}

        <StarshipDetails itemId={randomStarship} />
        {/* <StarshipList>
        {({name}) => <span>{name}</span>}
         </StarshipList> */}

        <PlanetDetails itemId={randomPlanet} />
        {/* <PlanetList>
        {({name}) => <span>{name}</span>}
         </PlanetList> */}

        {/* <Row left={personDetails} right={starshipDetails} />
        <Row left={PlanetDetails} /> */}
        {/* <RandomPlanet /> */}
        {/* <div className="mb-2">
          <PeoplePage />
        </div> */}
      </div>
    );
  }
}
