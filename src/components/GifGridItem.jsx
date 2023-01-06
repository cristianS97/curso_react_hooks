import React from 'react'

export const GifGridItem = ({id, image, title}) => {
    return (
        <div key={id} className="card animate__animated animate__fadeIn">
            <img src={image} alt={title} />
            {title.trim() !== '' ? <p>{title}</p> : <p>Sin descripción</p>}
        </div>
    )
}
