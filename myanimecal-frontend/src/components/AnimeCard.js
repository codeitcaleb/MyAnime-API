import React from 'react'
// import '../card.scss'
const AnimeCard = ({anime}) => {
  return (
    <div>
      <li>
        <img src={anime.image_url} />
        <h3>{anime.title}</h3>
        <p>{anime.synopsis}</p>
        <p>{anime.score}</p>
        {/* {anime.url}  <p>For more info about this anime.</p> */}
      </li>
    </div>
  );  
}

export default AnimeCard