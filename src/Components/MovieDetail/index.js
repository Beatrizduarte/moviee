import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Arrow from '../../asserts/Vector.svg'

import api from '../../services/api';

import './style.css';

const Component = ({match}) => {

  const [movieDetail, setMovieDetail] = useState({})

  useEffect(() => {
    api.get(`/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`).then(response => {
       setMovieDetail(response.data)
    })
  }, [])

  console.log(movieDetail)

    return (
        <>
          <div className="page-moviedetail">
            <header>
              <div className="container-header">
                <Link to={`/`}>
                  <img src={Arrow} alt="Voltar"/> <span>Voltar</span>
                </Link>
              </div>
            </header>
              <section>
                <div className="container-content">
                  <h2>Detalhe do filme</h2>
                  <div className="container-detail">
                    <div>
                      <img src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`} alt={`Mestre dos Mares - O Lado Mais Distante do Mundo`} />
                    </div>
                    
                    <div className="text-detail">
                      <h3>{movieDetail.title}</h3>
                      <div className="descri-detail">
                        <p>{movieDetail.vote_average}/<span>10</span></p>
                        <p>{`${movieDetail.runtime} min`}</p>
                      </div>
                      <p>{movieDetail.overview}</p>
                    </div>
                  </div>
                </div>
              </section>
          </div>
        </>
    );
}

export default Component;