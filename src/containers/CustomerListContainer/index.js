import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerMidleware from '../../store/modules/customers/middleware';

import CustomerList from './../../components/lists/CustomerList';

class CustomerListComponent extends Component {

  componentDidMount() {
    if (!this.props.isDeletingCustomer) {
      this.props.dispatchGetCustumers();
    }
  }


  handleSendToEdit = (customer) => {
    if (!this.props.isDeletingCustomer) {
      this.props.dispatchSelectCustomer(customer)
    }
  }

  handleSendToDelete = (customer) => {
    const confirmAction = confirm(`Você realmente deseja excluir: ${customer.name}?`)
    if (confirmAction) {
      this.props.dispatchDeleteCustumer(customer.id)
    }

  }

  render() {
    const { customers } = this.props;
    return (
      <section id="customers-view" className="customers-block">
        <CustomerList
          customers={customers}
          onSendToEdit={this.handleSendToEdit}
          onSendToDelete={this.handleSendToDelete}
        />
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

const CustomerListContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerListComponent);

export default CustomerListContainer;
