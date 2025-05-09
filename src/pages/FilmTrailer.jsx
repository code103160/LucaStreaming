import React from 'react'
import Navegar from '../components/Navegar'


export default function FilmTrailer(props) {
  return (<div data-bs-theme="dark">

    <Navegar/>
<<<<<<< HEAD
    <div className="row align-items-center my-3">
      <div className="col-2 align-self-start h-100">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{ props.text } Lorem ipsum dolor sit amet mais texto isso vai ser pego dos cards isso seria maior precisa de mais informação?</p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="container d-flex justify-content-center mt-3" data-bs-theme="dark">
          <div className="card ratio ratio-16x9"> 
            <iframe src = "https://www.youtube.com/watch?v=dQw4w9WgXcQ" title="trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
          </div>
        </div>
=======

    <div className="container d-flex justify-content-center mt-3" data-bs-theme="dark">
      <div></div>
      <div className="card ratio ratio-16x9"> 
        <iframe src = "#" title="trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
>>>>>>> parent of f2750a8 (Finalmente Navbar funcional)
      </div>
    </div>
  </div>
  )
}
