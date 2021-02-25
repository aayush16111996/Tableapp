import React from 'react';
import { Funccontext } from "./Tableapp";
function Columns(props) {
    const focusfunc = React.useContext(Funccontext);
    return (
        <React.Fragment>
            <td onClick={(event)=>focusfunc(event)} data-id={`${props.num}`} style={{backgroundColor:props.background}} className={`${props.name} allblocks`}>{props.name}</td>
        </React.Fragment>
    )
}

export default Columns
