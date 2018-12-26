import React from 'react';
import PropTypes from 'prop-types';

const CustomerPhone = ({ phone }) => (
  <p className="customer__contact-phone"><i className="icon-phone"></i>{phone}</p>
);

CustomerPhone.propTypes = {
  phone: PropTypes.string.isRequired
}

export default CustomerPhone;
