import axios from 'axios'
import moxios from 'moxios'
import sinon from 'sinon'
import { equal } from 'assert'

import customerApi from '../customer.api';


const serverResponse = [
  { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
  { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
];

describe('Customers API', () => {

  describe('getCustomers()', () => {
    beforeEach(function () {
      moxios.install(axios);
    });

    afterEach(function () {
      moxios.uninstall(axios);
    });


    context('GET customers', () => {

      it("should should return an array", (done) => {

        moxios.wait(() => {
          let request = moxios.requests.mostRecent()
          request.respondWith({
            status: 200,
            response: serverResponse
          });
        });

        customerApi.getCustomers()
          .then((res) => {
            equal(res.length, serverResponse.length);
            done();
          });
      });

    });

    context('when GET customers send an error', () => {

      it("should should return an ERROR", (done) => {
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();

          request.respondWith({
            status: 404,
            response: { msg: 'Not found' }
          });
        });

        customerApi.getCustomers()
          .catch((err) => {
            equal(err.message, 'Could not load Customers');
            done();
          });
      });
    });

  });

  describe('save()', () => {

    beforeEach(function () {
      moxios.install(axios);
    });

    afterEach(function () {
      moxios.uninstall(axios);
    });

    context('when save data is correct', () => {



      it("should save an  customer", (done) => {
        moxios.wait(() => {
          let request = moxios.requests.mostRecent()
          request.respondWith({
            status: 200,
            response: serverResponse[0]
          });
        });

        customerApi.save({ name: 'joao' })
          .then((res) => {
            equal(res.msg, 'Customer saved with success!');
            equal(res.customer.id, serverResponse[0].id);
            done();
          });
      });

    });

    context('when user data to save is not passed', () => {
      it("should not try to save save", () => {
        expect(() => customerApi.save()).to.throw('Pass an user to create');
      });
    });


    it("should should get an error ehen server sends an ERROR", (done) => {

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: { msg: 'Not found' }
        });
      });

      customerApi.save({ name: 'joao' })
        .catch((err) => {
          equal(err.message, 'Could not save the Customer');
          done();
        });
    });
  });

  describe('update()', () => {

    beforeEach(function () {
      moxios.install(axios);
    });

    afterEach(function () {
      moxios.uninstall(axios);
    });

    it("should Update an customer", (done) => {
      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: serverResponse[0]
        });
      });

      customerApi.update(1, { name: 'joao' })
        .then((res) => {
          equal(res.msg, 'Customer Updated with success!');
          equal(res.customer.id, serverResponse[0].id);
          done();
        });
    });


    it("should not update  when ID is not informed", () => {
      expect(() => customerApi.update(null, { name: 'joao' })).to.throw('Pass the user data and ID');
    });

    it("should not update  when User is not informed", () => {
      expect(() => customerApi.update(1)).to.throw('Pass the user data and ID');
    });

    it("should should get an error ehen server sends an ERROR", (done) => {

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: { msg: 'Not found' }
        });
      });

      customerApi.update(1, { name: 'joao' })
        .catch((err) => {
          equal(err.message, 'Could not update the Customer');
          done();
        });
    });

  });


  describe('delete()', () => {

    beforeEach(function () {
      moxios.install(axios);
    });

    afterEach(function () {
      moxios.uninstall(axios);
    });

    it("should Delete an customer", (done) => {
      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: serverResponse[0]
        });
      });

      customerApi.remove(1)
        .then((res) => {
          equal(res.msg, 'Customer Deleted with success!');
          equal(res.customer.id, serverResponse[0].id);
          done();
        });
    });


    it("should not update  when ID is not informed", () => {
      expect(() => customerApi.remove(null)).to.throw('Pass the user ID');
    });

    it("should get an error when server sends an ERROR", (done) => {

      moxios.wait(() => {
        let request = moxios.requests.mostRecent();
        request.respondWith({
          status: 404,
          response: { msg: 'Not found' }
        });
      });

      customerApi.remove(1)
        .catch((err) => {
          equal(err.message, 'Could not delete the Customer');
          done();
        });
    });

  });

});

