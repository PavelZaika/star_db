import React from "react";

import ItemDetails, { Record } from "../item-details";
import SwapiService from "../../services/swapi-service";

// import { SwapiServiceConsumer } from '../swapi-service-context';
const swapiService = new SwapiService();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiService;



const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender: " />
      <Record field="eyeColor" label="Eye Color: " />
    </ItemDetails>
  );
};
const PlanetDetails = ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population: " />
      <Record field="rotationPeriod" label="Rotation Period: " />
      <Record field="diameter" label="Diameter: " />
    </ItemDetails>
  );
};
const StarshipDetails =  ({itemId}) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model: " />
      <Record field="length" label="Manufacturer: " />
      <Record field="manufacturer" label="Length: " />
      <Record field="costInCredits" label="Cost: " />
      <Record field="crew" label="Crew: " />
      <Record field="passengers" label="Passengers: " />
      <Record field="cargoCapacity" label="Cargo Capacity: " />
      <Record field="hyperdriveRating" label="Hyperdrive Rating: " />
      <Record field="starshipClass" label="Starship Class: " />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };