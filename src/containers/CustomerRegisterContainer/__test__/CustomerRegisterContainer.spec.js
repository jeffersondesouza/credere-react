import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import configureMockStore from 'redux-mock-store';


import CustomerRegisterContainer, { CustomerRegister } from '../index'
import customerCaseParser from '../../../utils/customer-case-parser';

const mockStore = configureMockStore();

const store = mockStore({});

describe('CustomerRegisterContainer />', () => {

  it("should init component and contains the header", () => {
    const wrapper = mount(<CustomerRegisterContainer store={store} />);
    expect(wrapper.find('.register__header').length).to.eql(1);
  });


  describe('handleSubmit()', () => {

    context('when is creating a custumer', () => {

      it("should dispatch saveCustomer()", () => {
        const editingCustomer = {
          id: '',
          driverLicense: {
            issueAt: '1212-12-12',
            number: '12222'
          }
        };

        const saveCustumer = sinon.stub().withArgs(editingCustomer).returns(Promise.resolve(saveCustumer));

        sinon.spy(customerCaseParser, 'toServerCase');

        const wrapper = mount(
          <CustomerRegister
            store={store}
            editingCustomer={editingCustomer}
            saveCustumer={saveCustumer}
          />
        );


        wrapper.instance().handleSubmit(editingCustomer, () => { });


        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault() { } });

        expect(form.length).to.eql(1);

        sinon.assert.called(saveCustumer);

      });

    });

    context('Submit Customer Form', () => {

      context('when there is an Editing Customer', () => {

        it("should dispatch updateCustomer()", () => {
          const editingCustomer = {
            id: '1',
            driverLicense: {
              issueAt: '1212-12-12',
              number: '12222'
            }
          };

          const saveCustumer = sinon.stub().withArgs(editingCustomer).returns(Promise.resolve(editingCustomer));
          const updateCustomer = sinon.stub().withArgs(editingCustomer).returns(Promise.resolve(editingCustomer));


          const wrapper = shallow(
            <CustomerRegister
              store={store}
              editingCustomer={editingCustomer}
              saveCustumer={saveCustumer}
              updateCustomer={updateCustomer}
            />
          );

          const form = wrapper.find('CustomerRegisterForm');
          form.simulate('submit', { preventDefault() { }, resetForm(){} });

          expect(form.length).to.eql(1);
          sinon.assert.called(updateCustomer);
        });

      });

      context('when there is NOT an Editing Customer', () => {




        it("should dispatch updateCustomer()", () => {

          const editingCustomer = {
            id: '',
            driverLicense: {
              issueAt: '1212-12-12',
              number: '12222'
            }
          };

          const saveCustumer = sinon.stub().withArgs(editingCustomer).returns(Promise.resolve(editingCustomer));
          const updateCustomer = sinon.stub().withArgs(editingCustomer).returns(Promise.resolve(editingCustomer));

          const wrapper = shallow(
            <CustomerRegister
              store={store}
              editingCustomer={editingCustomer}
              saveCustumer={saveCustumer}
              updateCustomer={updateCustomer}
            />
          );

          const form = wrapper.find('CustomerRegisterForm');
          form.simulate('submit', { preventDefault() { }, resetForm(){} });

          expect(form.length).to.eql(1);
          sinon.assert.called(saveCustumer);
        });
      });

    });

  });


});
