import React from 'react'
import PeliculasTarjeta from './PeliculasTarjeta/PeliculasTarjeta'
import './Peliculas.css'

const peliculasInfo = [
  {
    id: '1',
    name: 'Viernes 13',
    urlImagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viernes-13-saga-peor-a-mejor-ranking-1588849712.jpeg',
  },
  {
    id: '2',
    name: 'Viernes 13',
    urlImagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viernes-13-saga-peor-a-mejor-ranking-1588849712.jpeg',
  },
  {
    id: '3',
    name: 'Viernes 13',
    urlImagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viernes-13-saga-peor-a-mejor-ranking-1588849712.jpeg',
  },
  {
    id: '4',
    name: 'Viernes 13',
    urlImagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viernes-13-saga-peor-a-mejor-ranking-1588849712.jpeg',
  },
  {
    id: '5',
    name: 'Viernes 13',
    urlImagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viernes-13-saga-peor-a-mejor-ranking-1588849712.jpeg',
  },
  {
    id: '6',
    name: 'Viernes 13',
    urlImagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viernes-13-saga-peor-a-mejor-ranking-1588849712.jpeg',
  },
  {
    id: '7',
    name: 'Viernes 13',
    urlImagen:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/viernes-13-saga-peor-a-mejor-ranking-1588849712.jpeg',
  },
]

const Peliculas = () => {
  return (
    <div className="container-peliculas">
    {
      peliculasInfo.map(pelicula=>(
        <PeliculasTarjeta url={pelicula.urlImagen} name={pelicula.name}/>
      ))
    }
    </div>
  )
}

export default Peliculas
