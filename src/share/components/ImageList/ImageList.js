import React from 'react'
import { Link } from 'react-router-dom'

import "./ImageList.css"

function ImageList (props){
    return (
        <div className="imagelist">
            {
                props.images.map(
                    img => {
                        return (
                            <Link key={img.id} to={`${props.pathname}/${img.id}`}>
                                <img src={"/images/" + img.path} alt={img.path}/>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}

export default ImageList