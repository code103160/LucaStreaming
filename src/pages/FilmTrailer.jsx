import React, { useState, useEffect } from 'react'
import Navegar from '../components/Navegar'
import { useParams } from 'react-router'
import FilmesId from '../functions/FilmesId';

export default function FilmTrailer() {

  const email = useState(sessionStorage.getItem("streamingEmail"));
  const token = useState(sessionStorage.getItem("streamingToken"));
  let params = useParams()
  const [film, setFilm] = useState({})

  useEffect(() => {
    FilmesId(email, token, params.id)
     .then((response) => {
      if(response.status === 200){
        let filmi = response.data.data.movie
        setFilm(filmi)
        console.log(filmi)
      }
     })
     .catch((erro) => {console.log(erro)})
    
  }, [])


  return (<div data-bs-theme="dark">

    <Navegar/>
    <div className="row align-items-center my-3">
      <div className="col-2 align-self-start h-100">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{ film.description }</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="container d-flex justify-content-center mt-3" data-bs-theme="dark">
          <div className="card ratio ratio-16x9"> 
            <iframe src = { film.movie_url } title="trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
