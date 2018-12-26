import React from 'react';
import PropTypes from 'prop-types';

import CustomerItem from './CustomerItem';

const CustomerList = ({ customers, onSendToEdit, onSendToDelete }) => {
  return (
    <ul className="customers">
      {
        customers.map(customer =>
          <CustomerItem
            key={customer.id}
            customer={customer}
            onSendToEdit={onSendToEdit}
            onSendToDelete={onSendToDelete}
          />
        )
      }
    </ul>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  onSendToEdit: PropTypes.func,
  onSendToDelete: PropTypes.func
}

export default CustomerList;
