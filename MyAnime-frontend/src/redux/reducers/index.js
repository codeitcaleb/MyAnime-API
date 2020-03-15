import { combineReducers } from 'redux'
import animeReducer from './animeReducer'
import reviewReducer from './reviewReducer'

const rootReducer = combineReducers({
  animeReducer,
  reviewReducer
})

export default rootReducer