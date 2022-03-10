import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Details from './pages/Details';
import {GifsContextProvider} from './context/GifsContext';


function App() {

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   getGifs(keyword).then(gifs => setGifs(gifs));
  // }

  return (

    <BrowserRouter>
      <div className="App">
        <section className="App-content">
          <Link to="/"><img className="logo" src="/logo.png" alt="gifs" /></Link>
          <div className="separator"></div>
          <div className="gifs-container">
            <GifsContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search/:keyword" element={<SearchResults />} />
                <Route path="/gif/:id" element={<Details />} />
              </Routes>
            </GifsContextProvider>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
