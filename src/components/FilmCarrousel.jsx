import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmCarrousel(props) {
  const navegar = useNavigate();
  return (
  <img src={ props.image } onClick={ () => navegar(`/filme/${props.filmeid}`) } className="d-block ms-auto me-auto w-25" alt="..."/>
  )
}
