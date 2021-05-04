import React, { Component } from 'react';
import './App.css';
import  Counter from'./Counter'
import Person from './Person'


class App extends Component {
state = {
  comments: [
    { name: "JB", message: "Youhou la famille!"},
    { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ]
}

  render() {
    const commentsJSX = this.state.comments.map(person => {
      return <p>{person.name} a dit: {person.message}</p>
    })
    return (
      <div className="App">
        <h1>Coucou les gens</h1>
        <Counter verb = "Mangé" rest="pomme(s)"/>
        <Counter verb = "Courru"  rest="Km(s)"/>
        <Counter verb = "Acheté" rest="produits" />
        <Counter verb = "Recommencé" rest="fois"/>
        <Person firstname="Jean" lastname="Michel"/>
        <Person firstname="Michel" lastname="Jean"/>
        <ul>
          {commentsJSX}
        </ul>
      </div>
    );
  }
}

export default App;
