import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
                <button>{this.props.contenu}</button>
        )
    }
}
