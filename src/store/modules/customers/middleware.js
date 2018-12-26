import Actions from './action';
import customerAPI from '../../api/customer.api';

export default class BookMidleware {

    static getCustomersRequest() {

        return dispatch => {

            dispatch(Actions.getCustumersRequest());

            return customerAPI.getCustomers()
                .then(customers => dispatch(Actions.getCustumersSuccess(customers)))
                .catch(error => dispatch(Actions.getCustumersFailure({ error })));
        };
    }

    static saveCustomerRequest(customer) {

        return dispatch => {

            dispatch(Actions.saveCustomerRequest(customer));

            return customerAPI.save(customer)
                .then(customers => dispatch(Actions.saveCustomerSuccess(customers)))
                .catch(error => dispatch(Actions.saveCustomerFailure({ error })));
        };
    }

    static updateCustomerRequest(customer) {

        return dispatch => {

            dispatch(Actions.updateCustomerRequest(customer));

            return customerAPI.update(customer)
                .then(customers => dispatch(Actions.updateCustomerSuccess(customers)))
                .catch(error => dispatch(Actions.updateCustomerFailure({ error })));
        };
    }

    static deleteCustomerRequest(customerid) {

        return dispatch => {

            dispatch(Actions.deleteCustomerRequest(customerid));

            return customerAPI.remove(customerid)
                .then(customers => dispatch(Actions.deleteCustomerSuccess(customers)))
                .catch(error => dispatch(Actions.deleteCustomerFailure({ error })));
        };
    }







    /* 
        static loadBookRequest(id) {
            return dispatch => {
                dispatch(Actions.loadBookRequest(id));
                bookApi.loadBook(id)
                    .then(book => {
                        dispatch(Actions.loadBookSuccess(book))
                    })
                    .catch(error => dispatch(Actions.loadBookFailure(error)));
            };
        }
    
    
        static reloadBooksRequest() {
            return dispatch => {
                bookApi.loadBooks()
                    .then(books => dispatch(Actions.loadBooksSuccess(books)))
                    .catch(error => dispatch(Actions.loadBooksFailure({ error })));
            };
        }
    
    
        static saveBook(book) {
            return dispatch => {
                dispatch(Actions.saveBookRequest(book));
                return bookApi
                    .saveBook(book)
                    .then(res => dispatch(Actions.saveBookSuccess()))
                    .then(res => dispatch(this.reloadBooksRequest()))
                    .catch(err => dispatch(Actions.saveBookFailure(err)))
            }
        }
    
        static updateBook(book) {
            return dispatch => {
                dispatch(Actions.updateBookRequest(book));
                return bookApi
                    .updateBook(book)
                    .then(res => dispatch(this.reloadBooksRequest()))
                    .then(res => dispatch(Actions.updateBookSuccess()))
                    .catch(err => dispatch(Actions.updateBookFailure(err)))
            }
        }
    
    
        static deleteBook(id) {
            return dispatch => {
                dispatch(Actions.deleteBookRequest(id));
                return bookApi
                    .deleteBook(id)
                    .then(res => {
                        dispatch(Actions.deleteBookSuccess());
                        redirectTo('/books');
                    })
                    .catch(err => dispatch(Actions.deleteBookFailure(err)))
            }
        }
    
        static selectBookToUpdate(book) {
            return dispatch => {
                return dispatch(Actions.selectBookToUpdate(book));
            }
        }
     */




}