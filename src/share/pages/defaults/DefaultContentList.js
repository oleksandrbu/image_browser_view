import React, { useState, useEffect } from 'react';

import ContentList from "../../components/ContentList/ContentList"
import Connection from "../../Connection"

function DefaultContentList(props){
    const [elements, setElements] = useState([])

    function elementList(pathname){
        let connection = new Connection(pathname)
        connection.get().then(list => setElements(list))
    }

    useEffect(() => {
        elementList(props.pathname) 
    }, [props])

    return <ContentList elements={elements} pathname={props.path} header={props.title}/>
}

export default DefaultContentList