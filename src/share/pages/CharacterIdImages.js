import React from 'react';

import ImageList from "../components/ImageList/ImageList"

import useImageList from "./hooks/useImageList"

function CharacterIdImages(props){
    const path = props.location.pathname

    return <ImageList images={useImageList(path)} pathname={path}/>
}

export default CharacterIdImages