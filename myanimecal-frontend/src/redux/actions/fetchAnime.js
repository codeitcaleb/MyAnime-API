export function fetchAnime() {
  const anime = fetch("http://localhost:3001/api/animes");
  return { 
    type: 'ADD_ANIME', 
    anime
  }
}