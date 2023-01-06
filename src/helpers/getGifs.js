export const getGifs = async (url, category, limit, api_key) => {
    const response = await fetch(`${url}?q=${encodeURI(category)}&limit=${limit}&api_key=${api_key}`);
    const json = await response.json();
    const data = json.data;

    // Creamos el arreglo de gifs
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            image: img.images.downsized_medium.url
        }
    });

    return gifs;
}