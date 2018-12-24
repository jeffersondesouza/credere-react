import Actions from './actions';
import authApi from '../../api/auth-api';
import { removeUserToken, setUserToken } from '../../../utils/LocalStorageManager';
import { redirectToWelcomePage, redirectTo } from '../../../utils/RouterRedirector';

export default class AuthMidleware {

    static loginRequest({ email, password }) {
        return dispatch => {
            dispatch(Actions.loginRequest({ email, password }));
            authApi.login({ email, password })
                .then(data => {
                    setUserToken(data.token);
                    redirectToWelcomePage();
                    return dispatch(Actions.loginSuccess({ token: data.token }));
                })
                .catch(error => dispatch(Actions.loginFailure({ error })));
        };
    }

    static logoutRequest() {

        return dispatch => {
            removeUserToken();
            redirectTo();

            return dispatch(Actions.logoutRequest());
        };
    }





    static singUpRequest({ email, password, confirmPassword }) {
        return dispatch => {

            dispatch(Actions.singUpRequest());

            authApi.signup({ email, password, confirmPassword })
                .then(() => dispatch(Actions.singUpSuccess()))
                .then(() => dispatch(AuthMidleware.loginRequest({ email, password })))
                .catch(error => dispatch(Actions.singUpFailure({ error })));
        };
    }

}