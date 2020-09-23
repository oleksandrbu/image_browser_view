import React, { useState, useEffect } from 'react';

import ImageList from "../../components/ImageList/ImageList"
import Connection from "../../Connection"

function DefaultImageList(props){
    const [images, setImages] = useState([])

    function imageList(path){
        let connection = new Connection(path)
        connection.get().then(list => setImages(list))
    }

    useEffect(() => {
        imageList(props.path) 
    }, [props])

    return <ImageList images={images} path={props.path}/>
}

export default DefaultImageList