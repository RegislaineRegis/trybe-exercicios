import './App.css';
import React from 'react';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick1() {
  console.log('Clicou no botão um!')
}
function handleClick2() {
  console.log('Clicou no botão dois!')
}
function handleClick3() {
  console.log('Clicou no botão três')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return( 
    <div>   
      <button onClick={handleClick1}>Meu botão - 1</button>
      <button onClick={handleClick2}>Meu botão - 2</button>
      <button onClick={handleClick3}>Meu botão - 3</button>    
    </div>
    )
  }
}
export default App;
