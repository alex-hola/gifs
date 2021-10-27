import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import useTrendingGifs from '../../hooks/useTrendingGifs';
import ListOfGifs from '../../components/ListOfGifs';

const Home = () => {

    const GIFS = ["LOTR", "Pandas", "League of legends", "Star wars", "Lions"];

    const [keyword, setKeyword] = useState("");
    const history = useHistory();

    const gifs = useTrendingGifs();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${keyword}`);
    }

    return (
        <>
            <div>
                <div className="searchBar">
                    <form onSubmit={handleSubmit}>
                        <button>
                            <span className="material-icons-outlined">
                                search
                            </span>
                        </button>
                        <input
                            type="text"
                            value={keyword}
                            placeholder="Busca un gif..."
                            onChange={event => setKeyword(event.target.value)}
                        />
                    </form>
                </div>
                <div className="popular">
                    <h5>Los más vistos</h5>
                    <ul>

                        {GIFS.map(gif => (

                            <li key={gif}><Link to={`/search/${gif}`}>{gif}</Link></li>

                        ))}

                    </ul>
                </div>
                <ListOfGifs gifs={gifs} />
            </div>
        </>
    );

}

export default Home;