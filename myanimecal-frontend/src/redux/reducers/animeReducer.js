export default function manageAnime(state = {
  anime: [], loading: false, }, action
) {
  console.log(action)
  switch (action.type) {
    case "START_ADDING_ANIME":
      return {...state,
      anime: [...state.anime],
      loading: true
      }
    case 'ADD_ANIME':

      return {
        ...state,
         anime: [...state.anime, action.anime],
         loading: false
      }
    case 'DELETE_ANIME':


    default:  
      return state
  }
}