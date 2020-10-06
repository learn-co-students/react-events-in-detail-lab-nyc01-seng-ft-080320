// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

    delayedClickHandler = (event) => {
        event.persist();
        window.setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay);
  };

    render() {
        return <button onClick={this.delayedClickHandler}>Delayed</button>
    }


}