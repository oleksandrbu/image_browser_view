import React from 'react';

import ContentList from "../components/ContentList/ContentList"
import useContentList from "./hooks/useContentList"

function Character(props){
    const path = props.location.pathname

    return <ContentList elements={useContentList(path)} pathname={path} header="Character List"/>
}

export default Character