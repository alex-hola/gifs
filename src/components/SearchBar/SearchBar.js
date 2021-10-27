import { useState } from 'react';

const SearchBar = () => {

    const [keyword, setKeyword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        getGifs(keyword).then(gifs => setGifs(gifs));
    }

    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={keyword}
                placeholder="Busca un gif..."
                onChange={event => setKeyword(event.target.value)}
            />
        </form>
    )

}

export default SearchBar;