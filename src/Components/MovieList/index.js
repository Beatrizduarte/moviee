import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

const MovieList = () => {

  const [movies, setMovies] = useState([])


  useEffect(() =>{
    api.get(`/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`).then(response =>{
       setMovies(response.data.results)
    })


  },[])

  console.log(movies)

    return (
        <>
          <div className="container-movielist"> 
            <section className="all-cards">
              <h2>Filmes Populares</h2>
            <ul>
              {movies.map(movie =>(
                 <li key={movie.id}>
                   <div className="card-movie"> 
                    <Link to={`/detail/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                      <div className="cicle-vote">
                        <p>{movie.vote_average}</p>
                      </div>
                   </Link>
                  </div>
                 </li>
              ))}
            </ul>
            </section>
          </div>
        </>
    );
}

export default MovieList;