// Code CoordinatesButton Component Here
import React from 'react'

function CoordinatesButton(props){
    const mouseCoordinates = e => {
        let x = e.clientX;
        let y = e.clientY
        return props.onReceiveCoordinates([x, y])
    }
    return(
        <button onClick={mouseCoordinates}>Click Me!</button>

    )
}

// class CoordinatesButton extends React.Component{
//     mouseCoordinates = e => {
//         let x = e.clientX;
//         let y = e.clientY
//         return this.props.onReceiveCoordinates([x, y])
//         // return [x, y]
//     }
//     render(){
//         return(
//         <button onClick={this.mouseCoordinates}>Click Me!</button>
//         )
//     }
// }

export default CoordinatesButton