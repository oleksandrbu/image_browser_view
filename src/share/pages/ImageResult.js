import React from 'react';

import ImageList from "../components/ImageList/ImageList"

import useImageList from "./hooks/useImageList"

function ImageResult(props){
    const path = "/image" + props.location.pathname + props.location.search
    return <ImageList images={useImageList(path)} pathname={"/image"}/>
}

export default ImageResult