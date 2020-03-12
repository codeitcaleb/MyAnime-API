import React from 'react'
import { Link } from 'react-router-dom'
const AnimeCard = ({anime}) => {
  return (
    <div>
      <li>
        <img src={anime.image_url} alt={`${anime.title}`} />
        <h3>{anime.title}</h3>
        <p>{anime.synopsis}</p>
        <Link to={{
          pathname: `/anime/${anime.mal_id}`,
          state: {
            anime
          }
          }} >{anime.url}</Link> 
      </li>
    </div>
  );
}

export default AnimeCard