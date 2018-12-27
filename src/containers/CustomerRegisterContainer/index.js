import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerMidleware from '../../store/modules/customers/middleware';

import CustomerRegisterHeader from './../../components/ui/CustomerRegisterHeader';
import CustomerRegisterFeedback from './../../components/ui/CustomerRegisterFeedback';
import CustomerRegisterForm from './../../components/forms/CustomerRegisterForm';
import customerCaseParser from '../../utils/customer-case-parser';


class CustomerRegister extends Component {


  handleSubmit = (customer) => {
    console.log('customer', customer);
    this.props.saveCustumer(customerCaseParser.toServerCase(customer))
  }

  render() {
    const { error, editingCustomer, isSavingCustomer } = this.props;

    return (
      <section className="register">
        <CustomerRegisterHeader />
        <div className="register__body">
          <CustomerRegisterFeedback />
          <CustomerRegisterForm 
            {...this.props} 
            onSubmit={this.handleSubmit} />
        </div>
      </section>
    );
  }
}



const mapStateToProps = (state) => ({
  ...state.customer

});

const mapDispatchToProps = dispatch => ({
  saveCustumer: (customer) => dispatch(CustomerMidleware.saveCustomerRequest(customer)),
});

const CustomerRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerRegister);


export default CustomerRegisterContainer;
