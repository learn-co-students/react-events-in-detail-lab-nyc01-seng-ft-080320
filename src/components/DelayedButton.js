// Code DelayedButton Component Here
import React from 'react'

function delayedButtonHandler(e, props){
    e.persist();
    //setTimeout(delayedFunct(e, props), 3000);
    setTimeout( () => {props.onDelayedClick(e)}, props.delay)
}
function delayedFunct(e, props){
    ;
}
function DelayedButton (props){
    console.log(props)
    return (<button
        onClick={e => {delayedButtonHandler(e, props)}}>Delayed</button>)
}

export default DelayedButton