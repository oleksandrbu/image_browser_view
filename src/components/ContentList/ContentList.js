import React from 'react'
import { Link } from 'react-router-dom'

import "./ContentList.css"
    
function ContentList(props){
    return (
        <div className="contentlist">
            <h1>
                {props.header}
            </h1>
            {
                props.elements.map(
                    el => {
                        return (
                            <Link key={el.id} to={`${props.path}/${el.id}`}>
                                <span>{el.name}</span>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}

export default ContentList
