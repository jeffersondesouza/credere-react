import axios from 'axios'
import moxios from 'moxios'
import sinon from 'sinon'
import { equal } from 'assert'

import Actions from '../action';
import CustomerMidleware from '../middleware';


const serverResponse = [
    { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
    { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
];

describe('Customers MIDLEWARE', () => {
    beforeEach(function () {
        moxios.install(axios);
    });

    afterEach(function () {
        moxios.uninstall(axios);
    });

    describe('getCustomersRequest()', () => {
        const spyRequest = sinon.spy(Actions, 'getCustumersRequest');
        const spyFailure = sinon.spy(Actions, 'getCustumersFailure');
        const spySuccess = sinon.spy(Actions, 'getCustumersSuccess');


        it("should retutn customers and call all success store action", (done) => {

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 200,
                    response: [
                        { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
                        { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
                    ]
                }).then(res => {
                    equal(res.data.length, serverResponse.length);
                    sinon.assert.called(spyRequest);
                    sinon.assert.called(spySuccess);
                    done()
                })
            });
            CustomerMidleware.getCustomersRequest()(() => { });
        });

        it("should retut an error  and call all error store actions", (done) => {

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 404,
                    response: [
                        { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
                        { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
                    ]
                }).then(err => {
                    sinon.assert.called(spyRequest);
                    sinon.assert.called(spyFailure);
                    done();
                })
            });
            CustomerMidleware.getCustomersRequest()(() => { });
        });
    });


    describe('saveCustomerRequest()', () => {
        const spyRequest = sinon.spy(Actions, 'saveCustomerRequest');
        const spyFailure = sinon.spy(Actions, 'saveCustomerFailure');
        const spySuccess = sinon.spy(Actions, 'saveCustomerSuccess');

        it("should retutn customers and call all success store action", (done) => {

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 200,
                    response:
                        { id: 1, firstName: 'Fred', lastName: 'Flintstone' },

                }).then(res => {
                    equal(res.data.id, serverResponse[0].id);
                    sinon.assert.called(spyRequest);
                    sinon.assert.called(spySuccess);
                    done()
                })
            });
            CustomerMidleware.saveCustomerRequest({ name: 'joao' })(() => { });
        });

        it("should not call scess save when server send ann error", (done) => {

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 404,
                    response: [
                        { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
                        { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
                    ]
                }).then(err => {
                    sinon.assert.called(spyRequest);
                    sinon.assert.called(spyFailure);
                    done();
                })
            });
            CustomerMidleware.saveCustomerRequest({ name: 'joao' })(() => { });
        });


        it("should have an erro if not pass the custumer to create", () => {
            expect(() => CustomerMidleware.saveCustomerRequest()(() => { }))
                .to.throw('Pass an user to create');
        });
    });


    describe('updateCustomerRequest()', () => {
        const spyRequest = sinon.spy(Actions, 'updateCustomerRequest');
        const spyFailure = sinon.spy(Actions, 'updateCustomerFailure');
        const spySuccess = sinon.spy(Actions, 'updateCustomerSuccess');

        it("should retutn customers and call all success store action", (done) => {

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 200,
                    response:
                        { id: 1, firstName: 'Fred', lastName: 'Flintstone' },

                }).then(res => {
                    equal(res.data.id, serverResponse[0].id);
                    sinon.assert.called(spyRequest);
                    sinon.assert.called(spySuccess);
                    done()
                })
            });
            CustomerMidleware.updateCustomerRequest({ id: 1, name: 'joao' })(() => { });
        });

        it("should not call scess save when server send ann error", (done) => {

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 404,
                    response: [
                        { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
                        { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
                    ]
                }).then(err => {
                    sinon.assert.called(spyRequest);
                    sinon.assert.called(spyFailure);
                    done();
                })
            });
            CustomerMidleware.updateCustomerRequest({ id: 1, name: 'joao' })(() => { });
        });


        it("should have an erro if not pass the custumer to create", () => {
            expect(() => CustomerMidleware.updateCustomerRequest()(() => { }))
                .to.throw('Pass the user data and ID');
        });

        it("should have an erro if not pass the custumer id to create", () => {
            expect(() => CustomerMidleware.updateCustomerRequest({ name: 1 })(() => { }))
                .to.throw('Pass the user data and ID');
        });
    });

});





/* export default class BookMidleware {

    static loadBooksRequest() {
        return dispatch => {
            dispatch(Actions.loadBooksRequest());
            bookApi.loadBooks()
                .then(books => dispatch(Actions.loadBooksSuccess(books)))
                .catch(error => dispatch(Actions.loadBooksFailure({ error })));
        };
    }

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

} */