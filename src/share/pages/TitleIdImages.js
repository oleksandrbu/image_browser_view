import React from 'react';

import ImageList from "../components/ImageList/ImageList"

import useImageList from "./hooks/useImageList"

function TitleIdImages(props){
    const path = props.location.pathname

    return <ImageList images={useImageList(path)} pathname={path}/>
}

export default TitleIdImages

