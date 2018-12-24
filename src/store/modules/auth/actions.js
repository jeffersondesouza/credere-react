import * as ActionsTypes from './constants';

export default class AuthActions {

    static loginRequest({ email, password }) {
        return {
            type: ActionsTypes.LOGIN_REQUEST
        }
    }

    static loginSuccess({ token }) {
        return {
            type: ActionsTypes.LOGIN_SUCCESS,
            payload: { token }
        }
    }

    static loginFailure(error) {
        return {
            type: ActionsTypes.LOGIN_FAILURE,
            payload: { error }
        }
    }

    
    static logoutRequest () {
        return {
            type: ActionsTypes.LOGOUT_REQUEST,
        }
    }



    static singUpRequest() {
        return {
            type: ActionsTypes.SINGUP_REQUEST
        }
    }

    static singUpSuccess() {
        return {
            type: ActionsTypes.SINGUP_SUCCESS,
        }
    }

    static singUpFailure(error) {
        return {
            type: ActionsTypes.SINGUP_FAILURE,
            payload: { error }
        }
    }

}