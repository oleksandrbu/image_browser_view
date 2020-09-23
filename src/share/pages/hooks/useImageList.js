import { useState, useEffect } from 'react';

import Connection from "../../Connection"

function useImageList(pathname){
    const [images, setImages] = useState([])

    function imageList(pathname){
        let connection = new Connection(pathname)
        connection.get().then(list => setImages(list))
    }

    useEffect(() => {
        imageList(pathname) 
    }, [pathname])

    return images
}

export default useImageList