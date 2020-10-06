import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    const coords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return (
      <button 
        onClick={this.handleClick}
      />
    );
  }
}

export default CoordinatesButton;