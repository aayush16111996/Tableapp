import React from 'react'

const Inputchange=React.forwardRef((props,ref)=>{

    return (
        <div>
          <input onChange={props.changetexthandler} id="changetextfield" ref={ref} value={props.value} type="text" placeholder="change any block text by clicking the block "/>
        </div>
    )
})

export default Inputchange
