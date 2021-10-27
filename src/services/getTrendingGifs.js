async function getTrendingGifs(){

    const apiURL = "https://api.giphy.com/v1/gifs/trending?api_key=4VaLODfbGRwVrHUUr9tRe3TMG7N3NCun&limit=25&rating=g";

    const response = await fetch(apiURL);
    const resp = await response.json();
    const gifs = resp.data.map( gif => {
        const {images, id, title} = gif;
        const {url} = images.downsized_medium;
        return {id, title, url};
    });

    return gifs;

}

export default getTrendingGifs;