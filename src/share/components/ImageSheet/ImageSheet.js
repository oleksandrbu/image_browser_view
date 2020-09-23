import React from 'react'

import "./ImageSheet.css"

function ImageSheet(props){
    return (
        <div className="imagesheet">
            <div className="imagesheet-image">
                <img src={"/images/" + props.image.path} alt=""/>
            </div>
            <div className="imagesheet-description">
                <span>Width: {props.image.width}</span>
                <span>Height: {props.image.height}</span>
                <span>FileType: { (props.image.filetype == null) ? "Unknown" : props.image.filetype.type }</span>
                <span>Title: { (props.image.title == null) ? "Unknown" : props.image.title.name }</span>
            </div>
        </div>
    )
}

export default ImageSheet