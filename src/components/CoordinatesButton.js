// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    onReceiveCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.onReceiveCoordinates}>Coordinates</button>
        )
    }
}

export default CoordinatesButton