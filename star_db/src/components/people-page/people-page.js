import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedItem: Math.floor(Math.random() * (87 - 1 + 1)) + 1
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    
    const { selectedItem } = this.state;
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const itemDetails = <ItemDetails itemId={selectedItem} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
