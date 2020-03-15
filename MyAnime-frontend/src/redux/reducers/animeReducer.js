export default function animeReducer(state = {
  anime: [], loading: false, }, action
) {
  console.log(action)
  switch (action.type) {
    case "LOADING_ANIME":
      return { 
        ...state, 
        loading: true 
      };

    case "GET_ALL_ANIME":
      return {
        ...state,
        anime: action.anime,
        loading: false
      };

    case "ADD_ANIME":
      return {
        ...state,
        anime: [...state.anime, action.anime],
        loading: false
      };
    case "DELETE_ANIME":
      return {
        ...state,
        anime: state.anime.filter(a => a.id !== action.id),
        loading: false
      };

    default:
      return state;
  }
}