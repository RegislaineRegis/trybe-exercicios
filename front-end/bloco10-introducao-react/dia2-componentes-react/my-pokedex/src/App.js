import './App.css';
import data from './data'
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemon={ data }/>
    </div>
  );
}

export default App;
