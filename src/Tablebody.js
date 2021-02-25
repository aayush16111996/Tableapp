import React from 'react';
import Rows from './Rows';

function Tablebody(props) {
    return (
        <tbody>
            {props.row.map((user, id) => {
                return (
                    <Rows key={id} rowid={id} col={props.column} />);
            })}
        </tbody>
    )
}

export default Tablebody
