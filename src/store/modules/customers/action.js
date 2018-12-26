import * as ActionTypes from './constants';

export default class BooksActions {

    static getCustumersRequest() {
        return {
            type: ActionTypes.LOAD_CUSTOMERS_REQUEST
        }
    }

    static getCustumersSuccess(books) {
        return {
            type: ActionTypes.LOAD_CUSTOMERS_SUCCESS,
            payload: { customers }
        }
    }

    static getCustumersFailure(error) {
        return {
            type: ActionTypes.LOAD_CUSTOMERS_FAILURE,
            payload: { error }
        }
    }


    static saveCustomerRequest(customer) {
        return {
            type: ActionTypes.SAVE_CUSTOMER_REQUEST,
            payload: { customer }
        }
    }

    static saveCustomerSuccess() {
        return {
            type: ActionTypes.SAVE_CUSTOMER_SUCCESS,
        }
    }

    static saveCustomerFailure(error) {
        return {
            type: ActionTypes.SAVE_CUSTOMER_FAILURE,
            payload: { error }
        }
    }

    static selectBookToUpdate(book) {
        return {
            type: ActionTypes.SELECT_BOOK_TO_UPDATE,
            payload: { book }
        }
    }

    
    static updateCustomerRequest(book) {
        return {
            type: ActionTypes.UPDATE_CUSTOMER_REQUEST,
            payload: { book }
        }
    }

    static updateCustomerSuccess() {
        return {
            type: ActionTypes.UPDATE_CUSTOMER_SUCCESS,
        }
    }

    static updateCustomerFailure(error) {
        return {
            type: ActionTypes.UPDATE_CUSTOMER_FAILURE,
            payload: { error }
        }
    }


    static deleteBookRequest(id) {
        return {
            type: ActionTypes.DELETE_BOOK_REQUEST,
            payload: { id }
        }
    }

    static deleteBookSuccess() {
        return {
            type: ActionTypes.DELETE_BOOK_SUCCESS,
        }
    }

    static deleteBookFailure(error) {
        return {
            type: ActionTypes.DELETE_BOOK_FAILURE,
            payload: { error }
        }
    }


}