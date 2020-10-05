// Code DelayedButton Component Here
import React from 'react'

function DelayedButton(props){
    const passedEvent = e => {
        e.persist()
        const timer = setTimeout(() => {
            props.onDelayedClick(e)
        }, props.delay)
        return timer
    }
    console.log(props)
    return (
        <button onClick={passedEvent}>Delayed Button</button>
    )
}
// class DelayedButton extends React.Component{
//     render(){
//         return(
//             "Goodbye"
//         )
//     }
// }

export default DelayedButton