import React from 'react'

export const Tile = ({name, action}) => {
    return (
        <div className="Tile" onClick={action}>
            <h1>{name}</h1>
        </div>
    )
}
