import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../error-indicator/";

import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then(peopleList => {
        this.setState({
          peopleList
        });
      })
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
        
  };

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item" 
        key={id} 
        onClick={()=>{this.props.onItemSelected(id)}}
        >{name}</li>
      )
    });
  }

  render() {
    const {peopleList, loading, error} = this.state;

    if(!peopleList) {return <Spinner />}

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}
