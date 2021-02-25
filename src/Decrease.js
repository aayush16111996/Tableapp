import React from 'react'

function Decrease(props) {
    return (
        <React.Fragment>
            <button onClick={props.handledecreaserows}>Decrease row</button>
            <button onClick={props.handledecreasecolumns}>Decrease column</button>
        </React.Fragment>
    )
}

export default Decrease
