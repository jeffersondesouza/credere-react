import axios from 'axios'
import moxios from 'moxios'
import sinon from 'sinon'
import { equal } from 'assert'

import Actions from '../action';
import reducer from '../reducer';
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

        it("should save a customer and call all success actions", (done) => {

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

        it("should not save and must call error actions when server sends an error", (done) => {

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

        it("should update customer and call all success actions", (done) => {

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

        it("should update and must call error actions when server sends an error", (done) => {

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






    describe('deleteCustomerRequest()', () => {
        const spyRequest = sinon.spy(Actions, 'deleteCustomerRequest');
        const spyFailure = sinon.spy(Actions, 'deleteCustomerFailure');
        const spySuccess = sinon.spy(Actions, 'deleteCustomerSuccess');

        it("should delete and call all success actions", (done) => {

            moxios.wait(() => {
                let request = moxios.requests.mostRecent()
                request.respondWith({
                    status: 200,
                    response: { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
                }).then(res => {
                    equal(res.data.id, serverResponse[0].id);
                    sinon.assert.called(spyRequest);
                    sinon.assert.called(spySuccess);
                    done()
                })
            });

            CustomerMidleware.deleteCustomerRequest(1)(() => { });
        });

        it("should not delete and must call error actions when server sends an error", (done) => {

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
            CustomerMidleware.deleteCustomerRequest(1)(() => { });
        });

        it("should have an erro if not pass the custumer id to create", () => {
            expect(() => CustomerMidleware.deleteCustomerRequest()(() => { }))
                .to.throw('Pass the user ID');
        });
    });


    describe('selectCustomerToUpdate()', () => {
        const spyRequest = sinon.spy(Actions, 'selectCustomerToUpdate');

        it("should select an customer to update", () => {
            const user = {
                id: 1,
                name: 'jonh',
            }
            CustomerMidleware.selectCustomerToUpdate(user )(() => { });

            sinon.assert.calledWith(spyRequest, user);

        });
    });


});
