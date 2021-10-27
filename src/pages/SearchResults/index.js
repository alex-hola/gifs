import { useParams } from 'react-router-dom';
import ListOfGifs from '../../components/ListOfGifs';
import useGifs from '../../hooks/useGifs';


const SearchResults = () => {

    //Recoge la keyword de la url
    const {keyword} = useParams();

    //Usa la funcion useGifs para recoger los gifs de la api 
    const gifs = useGifs({keyword});

    return (
        <>
            <ListOfGifs gifs={gifs} />
        </>
    );

}

export default SearchResults;