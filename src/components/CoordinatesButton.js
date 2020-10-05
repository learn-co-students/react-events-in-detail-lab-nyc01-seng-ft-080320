// Code CoordinatesButton Component Here
import React from 'react'
function buttonClickHandler(event){
    let arr = [event.clientX, event.clientY];
    console.log("clicked here", arr);
    return arr
}

function CoordinatesButton(props){
    return(<button
        onClick={e=>{props.onReceiveCoordinates([e.clientX, e.clientY])}}>Coordinates</button>)
}

export default CoordinatesButton