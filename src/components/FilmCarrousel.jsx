import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmCarrousel(props) {
  const navegar = useNavigate();
  return (
    <div className="carousel-item active" data-bs-theme="dark">
      <a onClick={ () => navegar(`/filme/${props.filmeid}`) } className="d-flex justify-content-center">
        <img src={ props.image } className="d-block w-25" alt="..."/>
      </a>
    </div>
  )
}
