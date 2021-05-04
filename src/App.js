import React, { Component } from 'react';
import './App.css';
import  Counter from'./Counter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Coucou les gens</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
