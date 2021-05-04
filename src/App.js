import React, { Component } from 'react';
import './App.css';
import  Counter from'./Counter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Coucou les gens</h1>
        <Counter verb="Mangé" rest="pomme(s)"/>
        <Counter verb = "Courru"  rest="Km(s)"/>
        <Counter verb = "Acheté" rest="produits" />
        <Counter verb = "Recommencé" rest="fois"/>
      </div>
    );
  }
}

export default App;
