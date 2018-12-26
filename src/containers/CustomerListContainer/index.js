import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomerMidleware from '../../store/modules/customers/middleware';

import CustomerList from './../../components/lists/CustomerList';

class CustomerListComponent extends Component {

  componentDidMount() {
    this.props.dispatchGetCustumers();
  }


  render() {
    const { customers } = this.props;
    return (
      <section id="customers-view" className="customers-block">
        <CustomerList customers={customers} />
      </section>
    );
  }
}




const mapStateToProps = (state) => ({
  ...state.customer
});

const mapDispatchToProps = dispatch => ({
  dispatchGetCustumers: () => dispatch(CustomerMidleware.getCustomersRequest()),
});

const CustomerListContainer = connect(mapStateToProps, mapDispatchToProps)(CustomerListComponent);

export default CustomerListContainer;
