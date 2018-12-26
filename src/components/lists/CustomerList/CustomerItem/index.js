import React from 'react';
import PropTypes from 'prop-types';

import CustomerNameSumary from './CustomerNameSumary';
import CustomerContacts from './CustomerContacts';
import CustomerActions from './CustomerActions';


const CustomerItem = ({ customer, onSendToEdit, onSendToDelete }) => (
  <li className="customer">
    <div className="customer__info">
      <CustomerNameSumary customer={customer} />
      <CustomerContacts customer={customer} />
    </div>
    <CustomerActions
      customer={customer}
      onSendToEdit={() => onSendToEdit(customer)}
      onSendToDelete={() => onSendToDelete(customer)}
    />
  </li>
);

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired,
  onSendToEdit: PropTypes.func,
  onSendToDelete: PropTypes.func
}

export default CustomerItem;
