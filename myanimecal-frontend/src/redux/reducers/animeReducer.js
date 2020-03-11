export default function manageAnime(state = {
  anime: [], action
}) {
  console.log(action)
  switch (action.type) {
    case 'ADD_ANIME':

    case 'DELETE_ANIME':


    default:  
      return state
  }
}