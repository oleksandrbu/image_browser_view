import React from 'react';

import "./DefaultDescriptionPage.css"

import Description from '../components/Description/Description'
import Avatar from '../components/Avatar/Avatar'
import ContentList from '../components/ContentList/ContentList'

import useContentList from "./hooks/useContentList"
import useDescriptionPage from "./hooks/useDescriptionPage"

function TitleId(props){
    const path = props.location.pathname 
    const [posterId, description] = useDescriptionPage(path)    

    return (
        <div className="contentpage">
            <Avatar path={`/images/posters/${posterId}`}/>
            <Description description={description} pathname={path}/>
            <ContentList elements={useContentList(path + "/characters")} pathname="/character" header="Character List"/>
        </div>
    )
}

export default TitleId