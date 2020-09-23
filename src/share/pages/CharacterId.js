import React from 'react';

import "./DefaultDescriptionPage.css"

import Description from '../components/Description/Description'
import Avatar from '../components/Avatar/Avatar'
import ContentList from '../components/ContentList/ContentList'

import useContentList from "./hooks/useContentList"
import useDescriptionPage from "./hooks/useDescriptionPage"

function CharacterId(props){
    const path = props.location.pathname 
    const [avatarId, description] = useDescriptionPage(path)    

    return (
        <div className="contentpage">
            <Avatar path={`/images/avatars/${avatarId}`}/>
            <Description description={description} pathname={path}/>
            <ContentList elements={useContentList(path + "/titles")} pathname="/title" header="Title List"/>
        </div>
    )
}

export default CharacterId