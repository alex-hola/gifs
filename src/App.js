import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
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
              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/search/:keyword">
                  <SearchResults />
                </Route>

                <Route path="/gif/:id">
                  <Details />
                </Route>

              </Switch>
            </GifsContextProvider>
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
