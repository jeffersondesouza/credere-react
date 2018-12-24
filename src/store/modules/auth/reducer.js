import INITIAL_STATE from './state'

import * as ActionsTypes from './constants';


function authReducer(state = INITIAL_STATE, action) {

	switch (action.type) {

		case ActionsTypes.LOGIN_REQUEST:
			return {
				...state,
				isLoggingIn: true,
				token: null,
			}

		case ActionsTypes.LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
				isLoggingIn: false,
				error: null,
			}

		case ActionsTypes.LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false,
				error: { ...action.payload.error }
			}




			case ActionsTypes.SINGUP_REQUEST:
			return {
				...state,
				isSigningUp: true,
			}

		case ActionsTypes.SINGUP_SUCCESS:
			return {
				...state,
				isSigningUp: false,
			}

		case ActionsTypes.SINGUP_FAILURE:
			return {
				...state,
				isSigningUp: false,
				error: { ...action.payload.error }
			}

		default:
			return state;
	}
}


export default authReducer;
