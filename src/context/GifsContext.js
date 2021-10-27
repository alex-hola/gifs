import { createContext, useState } from 'react';

const GifContext = createContext();

//children es lo que recibe, que es básicamente lo que va a envolver
export function GifsContextProvider({children}){

    const [gifs, setGifs] = useState([]);

    return(
        <GifContext.Provider value={{gifs, setGifs}}>
            {children}
        </GifContext.Provider>
    );
}

export default GifContext;