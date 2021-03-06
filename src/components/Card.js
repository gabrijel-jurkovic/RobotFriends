import React from "react";


const Card=({name,email,id})=>{
    return(
        <div className={'dib br3 pa3 ma2 grow bg-light-green bw2 shadow-5'}>
            <img alt={'robots'} src={'https://robohash.org/'+id+'?200x200'}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;