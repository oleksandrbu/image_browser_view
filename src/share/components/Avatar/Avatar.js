import React from 'react'

import "./Avatar.css"

function Avatar(props){
    return (
        <div className="avatar">
            <img src={props.path}/>
            <div></div>
        </div>
    )
}

export default Avatar