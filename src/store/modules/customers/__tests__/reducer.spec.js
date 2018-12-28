
import customerReducer from '../reducer';
import * as INITAL_STATE from '../state';

import * as ActionTypes from '../constants';

describe('Customers REDUCER', () => {


  describe('SAVE_CUSTOMER_REQUEST', () => {
    it('shoudl set SAVE_CUSTOMER_REQUEST state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.SAVE_CUSTOMER_REQUEST });
      expect(state.isSavingCustomer).to.equal(true);
      expect(state.saveCustumerSuccess).to.equal(false);
    });
  });

  describe('SAVE_CUSTOMER_SUCCESS', () => {
    it('shoudl set SAVE_CUSTOMER_SUCCESS state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.SAVE_CUSTOMER_SUCCESS });
      expect(state.isSavingCustomer).to.equal(false);
      expect(state.saveCustumerSuccess).to.equal(true);
    });
  });

  describe('SAVE_CUSTOMER_FAILURE', () => {
    it('shoudl set SAVE_CUSTOMER_FAILURE state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.SAVE_CUSTOMER_FAILURE, payload: { error: {} } });
      expect(state.isSavingCustomer).to.equal(false);
      expect(state.saveCustumerSuccess).to.equal(false);
    });
  });


  describe('LOAD_CUSTOMERS_REQUEST', () => {
    it('shoudl set LOAD_CUSTOMERS_REQUEST state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.LOAD_CUSTOMERS_REQUEST });
      expect(state.customers.length).to.equal(0);
      expect(state.isLoadingCustomers).to.equal(true);
    });
  });

  describe('LOAD_CUSTOMERS_SUCCESS', () => {
    it('shoudl set LOAD_CUSTOMERS_SUCCESS state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.LOAD_CUSTOMERS_SUCCESS, payload: { customers: [1, 2, 3] } });


      expect(state.customers[0].location).to.equal('cidade não informada, undefined');

      expect(state.customers[0].mainEmail).to.equal('Nenhum email cadastrado');

      expect(state.customers[0].mainPhone).to.equal('Nenhum telefone cadastrado');


    });
  });

  describe('RELOAD_CUSTOMERS_REQUEST', () => {
    it('shoudl set RELOAD_CUSTOMERS_REQUEST state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.RELOAD_CUSTOMERS_REQUEST });
      expect(state.isLoadingCustomers).to.equal(true);
    });
  });

  describe('RELOAD_CUSTOMERS_REQUEST', () => {
    describe('LOAD_CUSTOMERS_REQUEST', () => {
      it('shoudl set LOAD_CUSTOMERS_REQUEST state ', () => {
        const state = customerReducer(INITAL_STATE, { type: ActionTypes.LOAD_CUSTOMERS_REQUEST });
        expect(state.isLoadingCustomers).to.equal(true);
      });
    });
  });

  describe('SELECT_CUSTOMER_TO_UPDATE', () => {
    it('shoudl set SELECT_CUSTOMER_TO_UPDATE state ', () => {
      const state = customerReducer(
        INITAL_STATE,
        {
          type: ActionTypes.SELECT_CUSTOMER_TO_UPDATE,
          payload: { customer: { id: 1 } }
        });

      expect(state.editingCustomer.id).to.equal(1);
    });
  });

  describe('UPDATE_CUSTOMER_REQUEST', () => {
    it('shoudl set UPDATE_CUSTOMER_REQUEST state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.UPDATE_CUSTOMER_REQUEST });
      expect(state.isSavingCustomer).to.equal(true);
    });
  });

  describe('UPDATE_CUSTOMER_SUCCESS', () => {
    it('shoudl set UPDATE_CUSTOMER_SUCCESS state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.UPDATE_CUSTOMER_SUCCESS });
      expect(state.isSavingCustomer).to.equal(false);
      expect(state.editingCustomer.id).to.equal(undefined);
    });
  });

  describe('UPDATE_CUSTOMER_FAILURE', () => {
    it('shoudl set UPDATE_CUSTOMER_FAILURE state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.UPDATE_CUSTOMER_FAILURE, payload: { error: {} } });
      expect(state.isSavingCustomer).to.equal(false);
    });
  });

  describe('DELETE_CUSTOMER_REQUEST', () => {
    it('shoudl set DELETE_CUSTOMER_REQUEST state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.DELETE_CUSTOMER_REQUEST });
      expect(state.isDeletingCustomer).to.equal(true);
    });
  });

  describe('DELETE_CUSTOMER_SUCCESS', () => {
    it('shoudl set DELETE_CUSTOMER_SUCCESS state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.DELETE_CUSTOMER_SUCCESS });
      expect(state.isDeletingCustomer).to.equal(false);
      expect(state.deleteCustumerSuccess).to.equal(true);

    });
  });

  describe('DELETE_CUSTOMER_FAILURE', () => {
    it('shoudl set DELETE_CUSTOMER_FAILURE state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.DELETE_CUSTOMER_FAILURE, payload: { error: {} } });
      expect(state.isDeletingCustomer).to.equal(false);
      expect(state.deleteCustumerSuccess).to.equal(false);
    });
  });


  describe('LOAD_CUSTOMERS_FAILURE', () => {
    it('shoudl set LOAD_CUSTOMERS_FAILURE state ', () => {
      const state = customerReducer(INITAL_STATE, { type: ActionTypes.LOAD_CUSTOMERS_FAILURE, payload: { error: {} } });
      expect(state.isLoadingCustomers).to.equal(false);
    });
  });


  describe('DEFAULT', () => {
    it('shoudl set DEFAULT state ', () => {
    
      const state = customerReducer(INITAL_STATE, { type: 'default' });


      expect(state.customers).to.equal(undefined);
    
    
    });
  });



});
