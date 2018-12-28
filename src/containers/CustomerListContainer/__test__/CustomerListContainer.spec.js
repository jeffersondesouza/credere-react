import React from 'react';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import CustomerListContainer, { CustomerListComponent } from '../index'
import CustomerMidleware from '../../../store/modules/customers/middleware';

const mockStore = configureMockStore();

const store = mockStore({
  customer: {
    customers: []
  }
});

describe('CustomerListContainer />', () => {

  describe('when init the component', () => {

    context('CustomerListContainer.isDeletingCustomer is false', () => {
      it("should dispatch the load customers", () => {
        const dispatchGetCustumers = sinon.spy();

        const wrapper = shallow(<CustomerListComponent dispatchGetCustumers={dispatchGetCustumers} />);
        sinon.assert.called(dispatchGetCustumers);
      });

    });

    context('CustomerListContainer.isDeletingCustomer is true', () => {

      it("should NOT dispatch the load customers", () => {
        const dispatchGetCustumers = sinon.spy();

        const wrapper = shallow(
          <CustomerListComponent
            dispatchGetCustumers={dispatchGetCustumers}
            isDeletingCustomer={true} />
        );

        sinon.assert.notCalled(dispatchGetCustumers);
      });
    });
  });


  describe('dispatchSelectCustomer: Send to EDIT', () => {

    context('CustomerListContainer.isDeletingCustomer is false', () => {
      it("should dispatchSelectCustomer", () => {
        const dispatchSelectCustomer = sinon.spy();
        const dispatchGetCustumers = sinon.spy();

        const customers = [{ id: 1 }];

        const wrapper = shallow(
          <CustomerListComponent
            store={store}
            dispatchGetCustumers={dispatchGetCustumers}
            dispatchSelectCustomer={dispatchSelectCustomer}
            customers={customers}
          />
        );

        wrapper.instance().handleSendToEdit();

        sinon.assert.called(dispatchSelectCustomer);
      });

    });

    context('CustomerListContainer.isDeletingCustomer is true', () => {

      it("should NOT dispatchSelectCustomer", () => {
        const dispatchSelectCustomer = sinon.spy();
        const dispatchGetCustumers = sinon.spy();

        const wrapper = shallow(
          <CustomerListComponent
            dispatchSelectCustomer={dispatchSelectCustomer}
            dispatchGetCustumers={dispatchGetCustumers}
            isDeletingCustomer={true} />
        );
        wrapper.instance().handleSendToEdit();

        sinon.assert.notCalled(dispatchSelectCustomer);
      });
    });
  });



  describe('dispatchDeleteCustumer: Send to DELETE', () => {

    context('CustomerListContainer.isDeletingCustomer is false', () => {
      it("should dispatchDeleteCustumer", () => {
        const dispatchDeleteCustumer = sinon.spy();
        const dispatchGetCustumers = sinon.spy();

        const confirmStub = sinon.stub(window, 'confirm');

        confirmStub.resolves().alwaysReturned(true);

        const customers = [{ id: 1 }];

        const wrapper = shallow(
          <CustomerListComponent
            store={store}
            dispatchGetCustumers={dispatchGetCustumers}
            dispatchDeleteCustumer={dispatchDeleteCustumer}
            customers={customers}
          />
        );

        wrapper.instance().handleSendToDelete({ name: 'name' });

      });

    });

    context('CustomerListContainer.isDeletingCustomer is true', () => {

      it("should NOT dispatchDeleteCustumer", () => {
        const dispatchDeleteCustumer = sinon.spy();
        const dispatchGetCustumers = sinon.spy();
        window.confirm = false;

        const wrapper = shallow(
          <CustomerListComponent
            dispatchDeleteCustumer={dispatchDeleteCustumer}
            dispatchGetCustumers={dispatchGetCustumers}
            isDeletingCustomer={true} />
        );
        wrapper.instance().handleSendToDelete({ name: 'name' });

        sinon.assert.notCalled(dispatchDeleteCustumer);
      });
    });
  });

});


