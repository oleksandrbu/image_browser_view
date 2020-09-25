import React, { useState } from 'react';

import Search from "../components/Search/Search"
import "./AsideSearch.css"

function AsideSearch(props){
    const [visibility, setVisibility] = useState(false)

    function onClickHandler(){
        setVisibility(!visibility)
    }

    return (
        <aside>
            <Search isVisible={visibility}/>
            <div onClick={onClickHandler}><h1>SEARCH</h1></div>
        </aside>
    )
}

export default AsideSearch
