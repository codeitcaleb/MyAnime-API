import React from "react";
import { Link } from "react-router-dom";
import { MyAnimeForm } from "./MyAnimeForm";
const MyAnimeCard = ({ anime, handleChange, handleSubmit }) => {
  return (
    <div id={anime.id}>
      <li>
        <img src={anime.image_url} alt={anime.title} />
        <h3>{anime.title}</h3>
        <p>{anime.synopsis}</p>
        <button onClick={() => this.handleOnDelete(anime.id)}>
          Remove from List
        </button>
        <MyAnimeForm handleChange={handleChange} handleSubmit={handleSubmit} />
        {/* Write a MyAnimeReviews component  that renders the reviews for an anime */}
      </li>
    </div>
  );
};

export default MyAnimeCard;