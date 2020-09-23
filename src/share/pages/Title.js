import React from 'react';

import ContentList from "../components/ContentList/ContentList"
import useContentList from "./hooks/useContentList"

function Title(props){
    const path = props.location.pathname

    return <ContentList elements={useContentList(path)} pathname={path} header="Title List"/>
}

export default Title