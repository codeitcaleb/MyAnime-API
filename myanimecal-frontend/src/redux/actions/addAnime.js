export function addAnime(anime) {
  return dispatch => {
    dispatch({ type: "START_ADDING_ANIME" });
    fetch("http://localhost:3001/api/animes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(anime)
    })
      .then(response => response.json())
      .then(data => dispatch({ type: "ADD_ANIME", anime: data }));
  };
}