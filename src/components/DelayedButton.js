// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
  printDelay = (e) => {
    // e.persist()
    // setTimeout(function()  { this.props.onDelayedClick(e) }, this.props.delay)

    e.persist()
    setTimeout(() => { this.props.onDelayedClick(e) }, this.props.delay)
  }

  render() {
    return <button onClick={this.printDelay}>Button2</button>
  }
  
}
