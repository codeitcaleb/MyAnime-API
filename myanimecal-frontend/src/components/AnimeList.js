import React from 'react'
import AnimeCard from './AnimeCard'
const AnimeList = ({anime}) => {
  return (
    <div>
      <ul>
        {anime.map(anime => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </ul>
    </div>
  )
}

export default AnimeList