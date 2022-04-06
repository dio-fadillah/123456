import { combineReducers } from 'redux'
import { authState } from './auth'
 
export default combineReducers({
	authuser: authState
})