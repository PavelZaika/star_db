import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
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

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);
