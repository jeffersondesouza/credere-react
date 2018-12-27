import INITIAL_STATE from './state'

import * as ActionTypes from './constants';
import * as selectors from './selectors'


function customerReducer(state = INITIAL_STATE, action) {
	switch (action.type) {

		/* SAVE */
		case ActionTypes.SAVE_CUSTOMER_REQUEST:
			return {
				...state,
				isSavingCustomer: true,
				saveCustumerSuccess: false,
			}

		case ActionTypes.SAVE_CUSTOMER_SUCCESS:
			return {
				...state,
				isSavingCustomer: false,
				saveCustumerSuccess: true,
				error: null
			}

		case ActionTypes.SAVE_CUSTOMER_FAILURE:
			return {
				...state,
				isSavingCustomer: false,
				saveCustumerSuccess: false,
				error: { ...action.payload.error }
			}


		/* LOAD */
		case ActionTypes.LOAD_CUSTOMERS_REQUEST:
			return {
				...state,
				customers: [],
				isLoadingCustomers: true,
			}

		case ActionTypes.RELOAD_CUSTOMERS_REQUEST:
			return {
				...state,
				isLoadingCustomers: true,
			}

		case ActionTypes.LOAD_CUSTOMERS_SUCCESS:
			return {
				...state,
				customers: selectors.mapCustomers(action.payload.customers),
				isLoadingCustomers: true,
				error: null
			}

		case ActionTypes.LOAD_CUSTOMERS_FAILURE:
			return {
				...state,
				isLoadingCustomers: false,
				error: { ...action.payload.error }
			}

		/* UPDATE */
		case ActionTypes.SELECT_CUSTOMER_TO_UPDATE:

			return {
				...state,
				editingCustomer: selectors.editingCustomer(action.payload.customer)
			}

		case ActionTypes.UPDATE_CUSTOMER_REQUEST:
			return {
				...state,
				isSavingCustomer: true,
			}

		case ActionTypes.UPDATE_CUSTOMER_SUCCESS:
			return {
				...state,
				isSavingCustomer: false,
				editingCustomer: null,
				error: null
			}

		case ActionTypes.UPDATE_CUSTOMER_FAILURE:
			return {
				...state,
				isSavingCustomer: false,
				error: { ...action.payload.error }
			}


		/* DELETE */
		case ActionTypes.DELETE_CUSTOMER_REQUEST:
			return {
				...state,
				isDeletingCustomer: true,
				deleteCustumerSuccess: false
			}

		case ActionTypes.DELETE_CUSTOMER_SUCCESS:
			return {
				...state,
				isDeletingCustomer: false,
				deleteCustumerSuccess: true,
				error: null
			}

		case ActionTypes.DELETE_CUSTOMER_FAILURE:
			return {
				...state,
				isDeletingCustomer: false,
				deleteCustumerSuccess: false,
				error: { ...action.payload.error }
			}

		default:
			return state;
	}
}


export default customerReducer;
