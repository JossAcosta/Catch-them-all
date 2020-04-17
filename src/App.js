import React, { Component} from 'react';
import Navbar from './components/Navbar';
import PokemonList from './components/PokemonList';

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <PokemonList/>
      </div>
    );
  }
}
export default App;
