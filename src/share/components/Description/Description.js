import React from 'react'

import "./Description.css"

function Description(props){
    return (
        <div className="description">
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
        </div>
    )
}

export default Description