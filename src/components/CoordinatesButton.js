// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    bubbaCords = e => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }

    render() {
        return(
            <button
                onClick = {this.bubbaCords}
            ></button>
        )
    }
}

export default CoordinatesButton