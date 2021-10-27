import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import GifsContext from '../../context/GifsContext';
import Gif from '../../components/Gif/index';

const Details = () => {

    //id de los parametros de la url
    const {id} = useParams();

    //gifs del state del contexto
    const {gifs} = useContext(GifsContext);

    //Buscamos el que coindice con la id de la url
    const gifMatch =  gifs.find( gif => id === gif.id);

    return(
        <div >
            <Gif url={gifMatch.url} title={gifMatch.title}/>
        </div>
    )

}   

export default Details;