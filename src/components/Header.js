import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../img/logo-clean3000-transparent.png';
import { Link } from 'react-router-dom';

export const Header = ({ isHome = false }) => {

    return (

        <div className="header">
            <div className="container">
                <header className="App-header">
                    { !isHome ? <Link to="/"><i className="fas fa-arrow-left"></i></Link> : "" }
                    <div className="title-wrapper">
                        <img src={logo} alt="" />
                    </div>
                </header>
            </div>
        </div>
    )
}

