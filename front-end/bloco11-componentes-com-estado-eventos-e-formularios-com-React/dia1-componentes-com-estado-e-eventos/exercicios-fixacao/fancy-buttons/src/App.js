import './App.css';
import React from 'react';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  constructor(){
    super()
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  handleClick1() {
    console.log('Clicou no botão um!')
  }
  handleClick2() {
    console.log('Clicou no botão dois!')
  }
  handleClick3() {
    console.log('Clicou no botão três')
  }
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return( 
    <div>   
      <button onClick={this.handleClick1}>Meu botão - 1</button>
      <button onClick={this.handleClick2}>Meu botão - 2</button>
      <button onClick={this.handleClick3}>Meu botão - 3</button>    
    </div>
    )
  }
}
export default App;
