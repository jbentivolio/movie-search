import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MovieViews from './movies/MovieViews';
import SearchBox from './movies/Search';

const App = () => {
  //initilizes empty array:
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('top');
    
  //user text is received and passed through the get request 'search'
  const getMovieRequest = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=e4443315`
    //await API response
    const response = await fetch(url);
    //convert to json
    const responseJson = await response.json();

    //user text is received 'search' is updated
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  //called when app loads '':
  useEffect(()=> {
    //calls get request through 'search' value
    getMovieRequest(search);
  }, [search]);
    return (
      <div>
        <div><h2></h2></div>
        <div class='head'>
          <SearchBox search={search} setSearch={setSearch}/>
        </div>
        <div class="scrolling-wrapper">
        <MovieViews movies={movies} />
      </div>
      </div>
    );
};

export default App;