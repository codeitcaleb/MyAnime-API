import React from "react";
import AnimeCard from "../src/components/AnimeCard";
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
