import React from "react";
import ItemDetails, { Record } from "../item-details";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = ({ itemId, swapiService }) => {
  const {getStarship, getStarshipImage} = swapiService;
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
      }

export default withSwapiService(StarshipDetails);