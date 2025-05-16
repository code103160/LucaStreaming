import React, { useState, useEffect } from 'react'
import FilmCard from './FilmCard'
import Filmes from '../functions/Filmes';
import FilmCarrousel from './FilmCarrousel';

export default function CardOrganizer() {

  const [filmList, setFilmList] = useState([]);
  const mail = useState(sessionStorage.getItem("streamingEmail"));
  const toke = useState(sessionStorage.getItem("streamingToken"));
  
  useEffect(() => {
    Filmes(mail, toke)
      .then((response) => {
        if(response.status === 200){
          let movies = response.data.data.movies
          setFilmList(movies)
        }
        
      })
      .catch((erro) => {
        console.log(erro)
      })
    }, []);
    
  return (
    <div>
      <div className="container">
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carrousel-inner">
            {
              filmList.map((film, indice) => {
                <div key={ indice }>
                  <FilmCarrousel image={ film.thumbnail } filmeid={ film.id }/>
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div className="row row-cols-4">
        {
          filmList.map((film, indice) => {
            return (
              <div className="col" key={ indice }>
                <FilmCard image={ film.thumbnail } titulo={ film.title } text={ film.description } filmeid={ film.id }/>
              </div>
            )

          })
        }
      </div>
    </div>
    
  )
}
