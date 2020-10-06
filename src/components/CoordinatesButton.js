// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
    handleBtnClick = (e) => {
        let x = e.screenX 
        let y = e.screenY

        this.props.onReceiveCoordinates([x,y])
    }
    

    render() {
        return (
            <div>
                <button onClick={this.handleBtnClick}> Coordinates Button</button>
            </div>
        )
    }
}
