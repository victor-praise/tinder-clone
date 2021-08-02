import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (

                <IconButton onClick={
                    () => {
                        history.replace(backButton)
                    }
                }>
                    <ArrowBackIosIcon className="header__logo" fontSize="large" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__logo" fontSize="large" />
                </IconButton>
            )
            }

            <Link to="/">
                <img
                    className="header__logo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
                    alt="tinder logo" />
            </Link>

            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__logo" fontSize="large" />
                </IconButton>
            </Link>


        </div>
    )
}

export default Header
