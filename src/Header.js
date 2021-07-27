import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__logo" fontSize="large" />
            </IconButton> 
            <img
             className="header__logo"
             src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
             alt="tinder logo"/>
            <IconButton>
                <ForumIcon className="header__logo" fontSize="large" />
            </IconButton>
        
        </div>
    )
}

export default Header
