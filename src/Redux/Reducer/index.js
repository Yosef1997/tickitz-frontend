import { combineReducers } from 'redux'
import movieReducer from './movie'
import authReducer from './auth'
import orderReducer from './order'

const reducer = combineReducers({
  auth: authReducer,
  order: orderReducer,
  movie: movieReducer
})

export default reducer
