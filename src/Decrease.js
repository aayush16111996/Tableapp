import React from 'react'

function Decrease(props) {
    console.log("decreasing rows");
    return (
        <React.Fragment>
            <button onClick={props.handledecreaserows}>Decrease row</button>
            <button onClick={props.handledecreasecolumns}>Decrease column</button>
        </React.Fragment>
    )
}

export default React.memo(Decrease)
