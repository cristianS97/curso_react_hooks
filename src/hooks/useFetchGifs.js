import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (url, category, limit, api_key) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(url, category, limit, api_key).then(gifs => {
            setState({
                data: gifs,
                loading: false
            });
        });
    }, [category]);

    // setTimeout(() => {
    //     setState({
    //         data: [1, 2, 3, 4, 5],
    //         loading: false
    //     });
    // }, 5000);

    return state;
}
