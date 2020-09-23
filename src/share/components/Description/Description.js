import React from 'react'

import "./Description.css"
import { Link } from 'react-router-dom'

function Description(props){
    return (
        <div className="description">
            <h3>Description:</h3>
            {
                Object.entries(props.description).map(([key, value], i) => {
                    return (
                        <div key={i} className="description-field">
                            <span className="description-field-name">{key}: </span>
                            <span className="description-field-value">{value}</span>
                        </div>
                    )
                })
            }
            <Link to={props.pathname + "/images"}><div className="description-image-button"><h3>Images</h3></div></Link>
        </div>
    )
}

export default Description