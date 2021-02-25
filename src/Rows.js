import React from 'react'
import Columns from './Columns';
import { Colorcontext } from "./Tableapp";


function Rows(props) {
    const {colorid,changecolor} = React.useContext(Colorcontext);
    return (
        <React.Fragment>
            <tr className="rows">
                {props.col.map((user,id)=>{
                    if((changecolor===true)&&(colorid.length>0))
                    {
                        return (<Columns num={`${props.col.length*props.rowid + id}`} background={colorid[id].color===null?"":`${colorid[id].color}`} name={user} key={id} />);
                    }
                    return (<Columns num={`${props.col.length * props.rowid + id}`} background={``} name={user} key={id} />);
                })}
            </tr>
        </React.Fragment>
    )
}
export default Rows
