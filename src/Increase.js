import React from 'react'

function Increase(props) {
    console.log("increasing rows");
    return (
        <React.Fragment>
            <button onClick={props.handleincreaserows}>increase row</button>
            <button onClick={props.handleincreasecolumns}>increase column</button>
        </React.Fragment>
    )
}

export default React.memo(Increase)
