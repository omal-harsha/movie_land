import {useState,useEffect} from "react";
import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';


//bfe5f5df

const API_URL = 'https://www.omdbapi.com/?apikey=bfe5f5df'
//https://www.omdbapi.com/?apikey=bfe5f5df&s=Spiderman


const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerms, setSearchTerm] = useState('');

    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`);
        const data =  await response.json();

        setMovies(data.Search);
        //console.log(movies)
    }

    useEffect( () => {

        searchMovies('Spiderman');

    },[]);

    return(
       <div className="app">
            <h1>Movie Land</h1>

            <div className="search">
            <input
          value={searchTerms}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerms)}/>
            </div>

            {movies?.length > 0 
                ?(
                    <div className="container">
                        {movies.map((movie) => (
                         <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) : (

                    <div className="empty"> 
                        <h2>No Movies found</h2>
                    </div>
                )}
            
       </div>
    
    )
}

export default App;