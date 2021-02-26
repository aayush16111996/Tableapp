import React from 'react'

function Headrow(props) {
    console.log("head row rendering");
    return (
        <tr>
                {props.col.map((user, id) => {
                    return (
                        <td key={id}>
                                <input onChange={(event) => props.changecolor(event)} data-id={id} className="formele colorfield" type="color" name={`color${id}`} />
                        </td>)
                })}
        </tr>
    )
}

export default React.memo(Headrow)
