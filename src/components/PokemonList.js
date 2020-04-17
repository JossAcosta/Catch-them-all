import React, { Component} from 'react';
import axios from 'axios';
import './styles/PokemonList.css';
import PokemonCard from './PokemonCard'
import Pokeball from '../assets/images/pokeball.svg'

export default class PokemonList extends Component {
    state = {
        url:'https://pokeapi.co/api/v2/pokemon/',
        pokemon: '',
        catched: '',
        inputPokemonName:'',
    };
    change = (e)=>{
        this.setState({
            inputPokemonName:e.target.value,
        })
    }
    
    async componentDidMount(){
        const res = await axios.get(this.state.url);
        const pokemondb = res.data['results'];
        this.action =(e) =>{
            e.preventDefault()
        const pkName = this.state.inputPokemonName.toLowerCase();
        const newPokemon = [...this.state.catched]
        newPokemon.push(pkName)
        this.setState({catched:newPokemon});
        const pokemonCatched= this.state.catched;
        const showNewPokemon = [];
        if(pokemonCatched ){
            pokemonCatched.map(singleCatched => {
                pokemondb.map(single => {
                    if(single.name.includes(singleCatched)) {
                        showNewPokemon.push(single);
                    }
                 }); 
            })
            this.setState({
                pokemon:showNewPokemon})
            console.log(this.state)
        }
    };       
    }
    render(){
        return(
        <React.Fragment>
            <div className="container_form">
               <div className="c-formContainer">
                 <form className="c-form" >
                    <input 
                    className="c-form__input" 
                    placeholder="Pokemon Name" 
                    value={this.state.inputPokemonName}
                    onChange = {this.change}
                    name = "pokemonName">
                    </input>
                    <button className="c-form__button" type="button" 
                    onClick={this.action} >Cath it!
                    </button>  
                </form>
             </div>
            </div>

            <div className="list_container">
            {this.state.pokemon ? 
               (
               <div className="pokemon_list"> 
                { 
                this.state.pokemon.map((pokemon, index) => (
                    <PokemonCard 
                    key={index}
                    name= {pokemon.name}
                    url = {pokemon.url}
                    />))   
                }
                </div>)
                : (<div className="list_empty" >
                <h1 >No pokemon captured yet! </h1>
                <img src= {Pokeball} className="pokeball rotate" style={{width:'20rem'}}></img>
                </div>)
            }
            </div>
        </React.Fragment>
        )
    }
}