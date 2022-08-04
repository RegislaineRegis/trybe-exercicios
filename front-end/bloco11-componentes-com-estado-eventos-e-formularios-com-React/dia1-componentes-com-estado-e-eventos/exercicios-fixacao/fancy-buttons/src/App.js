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
      
      getColorBackgound(num) {

        return num % 2 === 0 ? 'green' : 'white';

      }

      render() {
        const {clicksBtnOne, clicksBtnTwo,clicksBtnThree} = this.state;
        return (
          <div>
           <button onClick={ this.handleButtonOne } 
           style={{ backgroundColor: this.getColorBackgound(clicksBtnOne) }}
           >
            Botão 1: Count = {clicksBtnOne}</button>
            <button onClick={ this.handleButtonTwo }
            style={{ backgroundColor: this.getColorBackgound(clicksBtnTwo) }}
            >
            Botão 2: Count = {clicksBtnTwo}</button>
            <button onClick={ this.handleButtonThree }
            style={{ backgroundColor: this.getColorBackgound(clicksBtnThree) }}
            >
            Botão 3: Count = {clicksBtnThree}</button>
          </div>
        );
      }
  }

export default App;
