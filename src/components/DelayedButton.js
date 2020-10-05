// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    
    clickHandler = (event) => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }
    render(){
        // {console.log(this.props)}
        return (
            <button onClick={this.clickHandler}>Delay!</button>
        )
    }
}