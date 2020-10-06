// Code DelayedButton Component Here

import React, { Component } from 'react'

export default class DelayedButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleClick = (e) => {
        e.persist()
        console.log(e)
        setTimeout(()=>{
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Delay Button</button>
            </div>
        )
    }
}
