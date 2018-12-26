import React from 'react';
import PropTypes from 'prop-types';

import CustomerItem from './CustomerItem';

const CustomerList = ({ customers }) => {

  return (
    <ul className="customers">
      {
        customers.map(customer => <CustomerItem  key={customer.id} customer={customer} />)
      }
    </ul>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired
}

export default CustomerList;
