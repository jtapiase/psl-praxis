import React, { Component } from 'react';
import logo from './marvel-banner.png';
import './App.css';
import HeroeOverview from '../HeroeOverview/HeroeOverview';
import heroesService from '../../services/heroesService';
import VillianOverview from '../VilliansOverview/VillianOverview';
import villianService from '../../services/villianService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: []
    };
    this.state = {
      villians: [] 
    };
  }

  componentDidMount() {
    heroesService.getHeroes().then((heroes) => {
      this.setState({ heroes: heroes.data });
    });

    villianService.getVillians().then((villians) => {
      this.setState({ villians: villians.data });
    });
  }

  render() {
    let listHeroes = this.state.heroes.map((heroe) => <HeroeOverview key={heroe.name} name={heroe.name} image={heroe.image} overview={heroe.history} link={heroe.link} />);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Heroes</h2>
        <div className="heroes-list">
          {listHeroes}
        </div>
      </div>
    );
  }

  render(){
    let listVillians = this.state.villians.map((villian) => <VillianOverview key={villian.name} name={villian.name} image={villian.image} overview={villian.history} link={villian.link} />);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Villanos</h2>
        <div className="villians-list">
          {listVillians}
        </div>
      </div>
    );
  }
}

export default App;
