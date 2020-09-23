import { useState, useEffect } from 'react';

import Connection from "../../Connection"

function useContentList(pathname){
    const [elements, setElements] = useState([])

    function elementList(pathname){
        let connection = new Connection(pathname)
        connection.get().then(list => setElements(list))
    }

    useEffect(() => {
        elementList(pathname) 
    }, [pathname])

    return elements
}

export default useContentList