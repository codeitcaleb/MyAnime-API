export default function reviewsReducer(
  state = {
    reviews: [],
    loading: false
  },
  action
) {
  console.log(action);
  switch (action.type) {
    case "LOADING_REVIEWS":
      return { ...state, reviews: [...state.reviews], loading: true };

    case "ADD_REVIEW":
      return {
        ...state,
        reviews: [...action.reviews],
        loading: false
        };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(anime => anime.id !== action.id),
        loading: false
      };

    default:
      return state;
  }
}
