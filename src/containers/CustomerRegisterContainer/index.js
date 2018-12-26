import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerMidleware from '../../store/modules/customers/middleware';

import CustomerRegisterHeader from './../../components/ui/CustomerRegisterHeader';
import CustomerRegisterFeedback from './../../components/ui/CustomerRegisterFeedback';
import CustomerRegisterForm from './../../components/forms/CustomerRegisterForm';


class CustomerRegister extends Component {

  render() {

    const { error, editingCustomer, isSavingCustomer } = this.props;
    console.log('error, editingCustomer, isSavingCustomer', error, editingCustomer, isSavingCustomer);

    return (
      <section className="register">
        <CustomerRegisterHeader />
        <div className="register__body">
          <CustomerRegisterFeedback />
          <CustomerRegisterForm />
        </div>
      </section>
    );
  }
}



const mapStateToProps = (state) => ({
  ...state.customer

});

const mapDispatchToProps = dispatch => ({
  dispatchGetCustumers: () => dispatch(CustomerMidleware.getCustomersRequest()),
  dispatchDeleteCustumer: (id) => dispatch(CustomerMidleware.deleteCustomerRequest(id)),
  dispatchSelectCustomer: (customer) => dispatch(CustomerMidleware.selectCustomerToUpdate(customer)),
});

const CustomerRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerRegister);


export default CustomerRegisterContainer;
