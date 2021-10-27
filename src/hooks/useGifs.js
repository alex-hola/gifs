import { useEffect, useContext } from 'react';
import getGifs from '../services/getGifs';
import GifContext  from '../context/GifsContext';


//Devuelve los gifs
const useGifs = ({keyword} = {keyword : null}) => {

    //const [gifs, setGifs] = useState([]);
    //Ahora usamos el state del GifContext, que es global
    const {gifs, setGifs} = useContext(GifContext);

    useEffect(() => {
        //Muestra lastKeyword si no ha recibido una keyword el useGifs
        (keyword) ? keyword = keyword : keyword = localStorage.getItem("lastKeyword");

        //Otra forma, ambas iguales
        // const keywordToUse = keyword ? keyword : localStorage.getItem("lastKeyword");
        // const keywordToUse = keyword || localStorage.getItem("lastKeyword");
        //getGifs({ keyword: keywordToUse })

        getGifs({keyword})
            .then(gifs => setGifs(gifs))
            //Guarda la keyword en localStorage como lastKeyword
            localStorage.setItem("lastKeyword", keyword);
      }, [keyword]);

    return gifs;
}

export default useGifs;