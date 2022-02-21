import React from 'react';

class Pokemon extends React.Component {    
    render() {
      const {pokemon: {name,type,averageWeight:{value,measurementUnit}, image}} = this.props;
    return (
      <div>
        <img src={image} alt={name}/>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average Weight:{value}{measurementUnit}</p>        
      </div>      
    )
  }
}

export default Pokemon;
