import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: Math.floor(Math.random() * (87 - 1 + 1)) + 1
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    
    const { selectedPerson } = this.state;
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = <PersonDetails personId={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
