import React from "react";

const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll', height:'700px',paddingTop:"30px",paddingBottom:"30px"}}>
            {props.children}
        </div>
    )
}

export default Scroll