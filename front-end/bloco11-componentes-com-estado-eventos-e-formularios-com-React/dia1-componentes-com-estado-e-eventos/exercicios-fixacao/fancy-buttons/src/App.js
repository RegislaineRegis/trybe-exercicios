import React from 'react';

  class App extends React.Component {
      constructor() {
        super();

        this.handleButtonOne = this.handleButtonOne.bind(this);
        this.handleButtonTwo = this.handleButtonTwo.bind(this);
        this.handleButtonThree = this.handleButtonThree.bind(this);

        this.state = {
          clicksBtnOne: 0,
          clicksBtnTwo: 0,
          clicksBtnThree: 0,
        };
      }

      handleButtonOne() {
        this.setState((stateActual, _props) => ({
          clicksBtnOne: stateActual.clicksBtnOne + 1,
        }));
      }
      
      handleButtonTwo() {
        this.setState((stateActual, _props) => ({
          clicksBtnTwo: stateActual.clicksBtnTwo + 1,
        }));
      }
      
      handleButtonThree() {
        this.setState((stateActual, _props) => ({
          clicksBtnThree: stateActual.clicksBtnThree + 1,
        }));
      }
      
      render() {
        return (
          <div>
            <button onClick={ this.handleButtonOne }>Botão 1: Count = {this.state.clicksBtnOne}</button>
            <button onClick={ this.handleButtonTwo }>Botão 2: Count = {this.state.clicksBtnTwo}</button>
            <button onClick={ this.handleButtonThree }>Botão 3: Count = {this.state.clicksBtnThree}</button>
          </div>
        );
      }
  }

export default App;
