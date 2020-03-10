import React from 'react'
import AnimeCard from './AnimeCard'
const AnimeList = ({anime}) => {
  return (
    <div>
      <ul>
        {anime.map(anime => (
          <AnimeCard anime={anime} />
        ))}
      </ul>
    </div>
  )
}

export default AnimeList