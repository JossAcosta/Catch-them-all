import React, { Component} from 'react';
import Spin from '../assets/images/Spin.gif'
import './styles/PokemonCard.css'


class PokemonCard extends Component {
    state={
        id: '',
        name:'',
        imageUrl: '',
    }
    componentDidMount(){
        const {name, url} = this.props;
        const id = url.split("/")[url.split("/").length -2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${id}.png?raw=true`;
        this.setState({
            id,
            name,
            imageUrl,
            imageLoading: true,
        });
    }

  render(){
    return(
      <div className="card_container">
       <h5 className="card_id">PokemonID: {this.state.id}</h5>
       <h1 className="card_name">{this.state.name
              .toLowerCase()
              .split(' ')
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ')
       }
       </h1>

       <div className="card_img"> {this.state.imageLoading ? (
           <img src= {Spin} style={{width:'5rem'}}></img>
       ) : null}
        <img  onLoad ={()=>this.setState({imageLoading:false})} src= {this.state.imageUrl}></img></div>

      
      </div>
    );
  }
}
export default PokemonCard;
