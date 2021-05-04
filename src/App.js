import React, { Component } from 'react';
import './App.css';
import  Counter from'./Counter'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Coucou les gens</h1>
        <Counter contenu="Mangé 0 pomme(s)"/>
        <Counter contenu = "Courru 0 Km(s)"/>
        <Counter contenu = "Acheté 0 produits" />
        <Counter contenu = "Recommencé 0 fois"/>
      </div>
    );
  }
}

export default App;
