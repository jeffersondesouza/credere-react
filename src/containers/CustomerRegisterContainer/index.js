import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerMidleware from '../../store/modules/customers/middleware';

import CustomerRegisterHeader from './../../components/ui/CustomerRegisterHeader';
import CustomerRegisterFeedback from './../../components/ui/CustomerRegisterFeedback';
import CustomerRegisterForm from './../../components/forms/CustomerRegisterForm';
import customerCaseParser from '../../utils/customer-case-parser';


class CustomerRegister extends Component {


  handleSubmit = (customer) => {

    console.log('this.props.editingCustomer', this.props.editingCustomer);
    if (this.props.editingCustomer.id) {
      const data = customerCaseParser.toServerCase(customer);
    //  this.props.updateCustomer(data);
      console.log('update', data);
    } else {
      const data = customerCaseParser.toServerCase(customer, true);
      // this.props.saveCustumer(data);
      console.log('save', data);
    }
  }

  render() {
    return (
      <section className="register">
        <CustomerRegisterHeader />
        <div className="register__body">
          <CustomerRegisterFeedback />
          <CustomerRegisterForm
            {...this.props}
            onSubmit={this.handleSubmit}
          />
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
  updateCustomer: (customer) => dispatch(CustomerMidleware.updateCustomerRequest(customer)),
});

const CustomerRegisterContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerRegister);


export default CustomerRegisterContainer;
