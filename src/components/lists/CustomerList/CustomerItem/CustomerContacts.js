import React from 'react';
import PropTypes from 'prop-types';

import CustomerEmail from './CustomerEmail';
import CustomerLocation from './CustomerLocation';
import CustomerPhone from './CustomerPhone';

const CustomerContacts = ({ customer }) => (
  <div className="customer__contact">
    <div className="customer__contact-header">
      <CustomerPhone phone={customer.mainPhone} />
      <CustomerEmail email={customer.mainEmail} />
    </div>
    <CustomerLocation location={customer.location} />
  </div>
);

CustomerContacts.propTypes = {
  customer: PropTypes.object.isRequired
}

export default CustomerContacts;




