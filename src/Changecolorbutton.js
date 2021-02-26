import React from 'react'

function Changecolorbutton(props) {
    return (
        <tr>
            <td id="changebutton">
                <button onClick={props.changehandler}>Change</button>
            </td>
        </tr>
    )
}

export default React.memo(Changecolorbutton)
