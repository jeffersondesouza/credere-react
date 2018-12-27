import Actions from './action';
import customerAPI from '../../api/customer.api';

export default class CustomerMidleware {

    static getCustomersRequest() {
        return dispatch => {
            dispatch(Actions.getCustumersRequest());
            return customerAPI.getCustomers()
                .then(customers => dispatch(Actions.getCustumersSuccess(customers)))
                .catch(error => dispatch(Actions.getCustumersFailure({ error })));
        };
    }


    static reloadCustumersRequest() {
        return dispatch => {
            dispatch(Actions.reloadCustumersRequest());
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
                .then(() => dispatch(CustomerMidleware.reloadCustumersRequest()))
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
                .then(() => dispatch(CustomerMidleware.reloadCustumersRequest()))
                .catch(error => dispatch(Actions.deleteCustomerFailure({ error })));
        };
    }


    static selectCustomerToUpdate(customer) {
        return dispatch => {
            return dispatch(Actions.selectCustomerToUpdate(customer));
        }
    }

}