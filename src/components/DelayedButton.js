import React, {Component} from 'react';

class DelayedButton extends Component {

    getDelay = (e) => {
        e.persist();
        // let target = e.target;
        setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.getDelay}>Delayed Button</button>
        )   
    }
}

export default DelayedButton