import React from 'react'

import "./Header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <div className="header-logo"><img src="logo.png" alt="Logo here"/></div>
            </Link>
            <Link to="/image">
                <div className="header-volume"><span>Images</span></div>
            </Link>
            <Link to="/title">
                <div className="header-volume"><span>Titles</span></div>
            </Link>
            <Link to="/character">
                <div className="header-volume"><span>Characters</span></div>
            </Link>
        </header>
    )
}

export default Header