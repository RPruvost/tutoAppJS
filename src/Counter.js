import React, { Component } from 'react'

export default class Counter extends Component {
    state = {count: 0}
    
    increment = () => {
        this.setState({
        count: this.state.count+1
        })
        }
    render() {
        return (
                <button onClick={this.increment}>{this.props.verb} {this.state.count} {this.props.rest}</button>
        )
    }
}
