import React from 'react';
import PropTypes from 'prop-types';

const CustomerEmail = ({ email }) => (
  <p className="customer__contact-email"><i className="icon-mail"></i>{email}</p>
);

CustomerEmail.propTypes = {
  email: PropTypes.string.isRequired
}

export default CustomerEmail;
