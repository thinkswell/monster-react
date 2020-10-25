import React, { Component } from 'react';
import CardList from './components/CardList/CardList';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((monsters) => this.setState({ monsters: monsters }));
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleSearch={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
