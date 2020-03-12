import React from "react";
import AnimeCard from "./AnimeCard";
const AnimeResults = ({ anime }) => {
  debugger;
  return (
    <div>
      <ul>
        {anime.map(anime => (
          <AnimeCard anime={anime} />
        ))}
      </ul>
    </div>
  );
};

export default AnimeResults;
