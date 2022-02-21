import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {    
    render() {
      const { pokemon } = this.props;    
        return (
      <div>
        {pokemon.map((element) => <Pokemon key= {element.id} pokemon={element}/>)}
      </div>      
    );
  }
}

export default Pokedex;