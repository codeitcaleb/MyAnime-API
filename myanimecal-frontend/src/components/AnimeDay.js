import React from 'react'
import AnimeList from './AnimeList'
const AnimeDay = ({day, anime}) => {
  return (
    <div>
      <h2>{day}</h2>
      <AnimeList anime={anime} />
    </div>
  )
}

export default AnimeDay