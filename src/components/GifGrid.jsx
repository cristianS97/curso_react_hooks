import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import React, { Fragment, useEffect, useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const api_key = 'nFze9eDQziZCqQHkhDXGSzDbqFpvOWCb';
    const limit = 10;

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(url, category, limit, api_key).then(images => {
    //         setImages(images);
    //     })
    // }, [category]);

    const {data:images, loading} = useFetchGifs(url, category, limit, api_key);
    // console.log(data);
    // console.log(loading);

    return (
        <Fragment>
            <h3>{ category }</h3>
            {/* <div className='card-grid'>
                {images.map(image => (
                    // Con destructuración se mandan todas las propiedades
                    <GifGridItem key={image.id} {...image} />
                ))}
            </div> */}

            {loading ?
                <div className='circle'></div>
                :
                <div className='card-grid'>
                    {images.map(data => (
                        // Con destructuración se mandan todas las propiedades
                        <GifGridItem key={data.id} {...data} />
                    ))}
                </div>
            }
        </Fragment>
    )
}
