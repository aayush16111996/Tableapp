import React from 'react'

function Headrow(props) {
    return (
        <React.Fragment>
                {props.col.map((user, id) => {
                    return (
                        <td key={id}>
                            <form className="formele">
                                <input onChange={(event) => props.changecolor(event)} data-id={id} className="colorfield" type="color" name={`color${id}`} />
                            </form>
                        </td>)
                })}
        </React.Fragment>
    )
}

export default Headrow
