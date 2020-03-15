export const getReview = () => {
  return dispatch => {
    dispatch({ type: "START_ADDING_REVIEW" });
    fetch("http://localhost:3001/api/animes")
      .then(response => response.json())
      .then(data => {
        return dispatch({ type: "ADD_ANIME", review: data });
      });
  };
};

export function addReview(anime) {
  return dispatch => {
    dispatch({ type: "START_ADDING_REVIEW" });
    fetch("http://localhost:3001/api/animes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(anime)
    })
      .then(response => response.json())
      .then(data => {
        return dispatch({ type: "ADD_REVIEW", review: data });
      });
  };
}

export function deleteReview(id) {
  return dispatch => {
    dispatch({ type: "START_ADDING_REVIEW" });
    fetch(`http://localhost:3001/api/animes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(dispatch({ type: "DELETE_REVIEW", id }));
  };
}
