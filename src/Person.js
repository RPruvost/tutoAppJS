import React, { Component } from 'react'


export default class Person extends Component {
    state = {
        sentence: ""
      }
      
      addPoney = () => {
        this.setState({
          sentence: "j'aime les poneys"
        })
      }
    
    render() {
        return (
            <h3 onClick = {this.addPoney}> Bonjour, je suis {this.props.firstname} {this.props.lastname} {this.state.sentence}</h3>
        )
    }
}
