import React from "react";
import { Link } from "react-router-dom";
const MyAnimeCard = ({ anime }) => {
  return (
    <div id={anime.id}>
      <li>
        <img src={anime.image_url} alt={anime.title} />
        <h3>{anime.title}</h3>
        <p>{anime.synopsis}</p>
        <button onClick={() => this.handleOnDelete(anime.id)}>
          Remove from List
        </button>
      </li>
    </div>
  );
};

export default MyAnimeCard;
