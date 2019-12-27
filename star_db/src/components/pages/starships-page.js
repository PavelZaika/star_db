import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../row';

export default class StarshipsPage extends Component {

  state = {
    selectedItem: Math.floor(Math.random() * (32 - 1 + 1)) + 1
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />} />
    );
  }
}