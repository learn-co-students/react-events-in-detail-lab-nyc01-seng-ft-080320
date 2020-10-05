// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

    nargoolz = e => {
        e.persist(); // omg I forgot to invoke for mad long and was dying irl
        setTimeout(() =>{
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }
    

    render() {
        return(
            <button
                onClick = {this.nargoolz}
            >Delay</button>
        )
    }
}

export default DelayedButton