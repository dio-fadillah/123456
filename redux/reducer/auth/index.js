import { initialState } from '../../action/counter/state'
import { actionType } from '../../action/counter/type'

export const authState = (state = initialState, action) => {
	switch (action.type) {
		case actionType.auth:
			return { ...state, user: state.user }
		default:
			return state
	}
}