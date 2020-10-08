// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleDelayClick = (evt) => {
    evt.persist();
    let {onDelayedClick, delay} = this.props
    setTimeout(() => {onDelayedClick(evt)}, delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelayClick}></button>
      </div>
    );
  }

}

export default DelayedButton;
