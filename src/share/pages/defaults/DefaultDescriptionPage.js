import React, { useState, useEffect } from 'react';

import "./DefaultDescriptionPage.css"

import Connection from "../../Connection"
import Description from '../../components/Description/Description';
import Avatar from '../../components/Avatar/Avatar';
import DefaultContentList from './DefaultContentList';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function DefaultDescriptionPage(props){
    const [description, setDescription] = useState({name: "", release: null})
    const [avatarId, setAvatarId] = useState(0)

    function changeDescription (pathname){
        let connection = new Connection(pathname)
        connection.get().then(title => {
            const {id, name, release} = title
            setAvatarId(id)
            const date = new Date(Date.parse(release))
            setDescription({Name: name, Release: `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`})
        })
    }

    useEffect(() => {
        changeDescription(props.pathname)
    }, [props])

    return (
        <div className="contentpage">
            <Avatar path={`/images/avatar/${avatarId}`}/>
            <Description description={description}/>
            <DefaultContentList pathname={props.pathname + props.pathToList + "s"} path={props.pathToList} title={props.title}/>
        </div>
    )
}

export default DefaultDescriptionPage