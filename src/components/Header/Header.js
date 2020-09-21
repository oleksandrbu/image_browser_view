import React from 'react'

import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <div className="header-logo"></div>
            <div className="header-volume"><span>Images</span></div>
            <div className="header-volume"><span>Titles</span></div>
            <div className="header-volume"><span>Characters</span></div>
        </header>
    )
}

export default Header