import React from 'react'
import logo from '../img/logo-clean3000-mini.png'

export const Tile = ({name, action}) => {
    return (
        <div className="tile padding-1" onClick={action}>
            <div className="container-img">
                <img src={logo} alt="" />
            </div>
            
            <h1>{name}</h1>
        </div>
    )
}
