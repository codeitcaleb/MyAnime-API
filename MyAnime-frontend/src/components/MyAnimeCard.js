import React, { Component } from "react";
import { Link } from "react-router-dom";
const MyAnimeCard = ({ anime }) => {

  return (
    <div>
      <li>
        <img src={anime.image_url} alt={`${anime.title}`} />
        <h3>
          <Link
            to={{
              pathname: `/myanime/${anime.id}`,
              state: { anime }
            }}
          >
            {anime.title}
          </Link>
        </h3>
        <p>{anime.synopsis}</p>
      </li>
    </div>
  );
};

export default MyAnimeCard;
