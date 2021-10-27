import { useEffect, useContext } from 'react';
import getTrendingGifs from '../services/getTrendingGifs';
import GifContext  from '../context/GifsContext';


//Devuelve los gifs pasada una keyword de búsqueda
const useTrendingGifs = () => {

    //const [gifs, setGifs] = useState([]);
    //Ahora usamos el state del GifContext, que es global
    const {gifs, setGifs} = useContext(GifContext);

    useEffect(() => {
        getTrendingGifs()
            .then(gifs => setGifs(gifs))
      }, []);

    return gifs;
}

export default useTrendingGifs;