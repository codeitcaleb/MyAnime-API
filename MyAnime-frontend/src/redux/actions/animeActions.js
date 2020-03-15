export const getAnime = () => {
  return dispatch => {
    dispatch({ type: "LOADING_ANIME" });
    fetch("http://localhost:3001/api/animes")
      .then(response => response.json())
      .then(data => {
        return dispatch({ type: "GET_ALL_ANIME", anime: data });
      });
  };
};

export function addAnime(anime) {
  
  return dispatch => {
    dispatch({ type: "LOADING_ANIME" });
    fetch("http://localhost:3001/api/animes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(anime)
    })
      .then(response => response.json())
      .then(data => {
        return dispatch({ type: "ADD_ANIME", anime: data })});
  };
};

export function deleteAnime(id) {
  return dispatch => {
    dispatch({ type: "LOADING_ANIME" });
    fetch(`http://localhost:3001/api/animes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => dispatch({ type: "DELETE_ANIME", id}));
  };
}