import React, { useState, useEffect } from 'react';

import ImageSheet from "../components/ImageSheet/ImageSheet"
import Connection from "../Connection"

function ImageId(props){
    const [image, setImage] = useState([])

    function loadImage(path){
        let connection = new Connection(path)
        connection.get().then(image => setImage(image))
    }

    useEffect(() => {
        loadImage(props.location.pathname)
    }, [props])

    return <ImageSheet image={image}/>
}

export default ImageId