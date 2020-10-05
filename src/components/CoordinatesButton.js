import React, {Component} from 'react';

class CoordinatesButton extends Component {


    getCoords = (e) => {
        let coords = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render() {
        return (
            <button onClick={this.getCoords}>Coordinates Button</button>
        )
    }
}

export default CoordinatesButton