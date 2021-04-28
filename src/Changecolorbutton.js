import React from 'react'

function Changecolorbutton(props) {
    return (
        <tr>
            <td id="changebutton">
                <button onClick={props.changehandler}>Changegjhkmdfv</button>
            </td>
        </tr>
    )
}

export default React.memo(Changecolorbutton)
