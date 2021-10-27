import './ListOfGifs.css';
import Gif from '../Gif';

const ListOfGifs = ({gifs}) => {
 
    return(
       
        <div>
            <div className="ListOfGifs">
                    
                    {gifs.map( img => <Gif title={img.title} key={img.id} url={img.url} id={img.id}/>)}

            </div>
        </div>

    )

}

export default ListOfGifs;