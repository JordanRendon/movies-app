import React from 'react'
import './peliculas-tarjeta.css'

const PeliculasTarjeta = (props) => {
  return (
    <div className='tarjeta'>
      <img src={props.url}/>
      <h2>{props.name}</h2>
    </div>
  )
}

export default PeliculasTarjeta
