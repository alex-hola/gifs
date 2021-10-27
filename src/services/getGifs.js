async function getGifs({keyword}){

    const apiKey = "4VaLODfbGRwVrHUUr9tRe3TMG7N3NCun";

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=r&lang=en`;

    //https://api.giphy.com/v1/gifs/search?api_key=4VaLODfbGRwVrHUUr9tRe3TMG7N3NCun&q=panda&limit=25&offset=0&rating=r&lang=en
    // return fetch(apiURL)
    //   .then(res => res.json())
    //   .then(response => {
    //     const { data = [] } = response; //si no hay nada, sera un array
    //     if(Array.isArray(data)){ 

    //       const gifs = data.map(el => el.images.downsized_medium.url)
    //       return gifs;

    //     }
    //   }
    //   )

    const response = await fetch(apiURL);
    const resp = await response.json();
    const gifs = resp.data.map(el => {
        const {images,title,id} = el;
        const {url} = images.downsized_medium;
        return {title, id, url};
    });
    return gifs;
}

export default getGifs;