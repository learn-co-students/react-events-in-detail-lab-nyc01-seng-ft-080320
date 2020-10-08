// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  handleClick = (evt) => {
    this.props.onReceiveCoordinates([evt.screenX, evt.screenY])
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click dis!</button>
      </div>
    );
  }

}

export default CoordinatesButton;
