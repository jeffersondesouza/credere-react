import React from 'react';
import PropTypes from 'prop-types';

const CustomerLocation = ({ location }) => (
  <p className="customer__contact-location"><i className="icon-location "></i>{location}</p>
);

CustomerLocation.propTypes = {
  location: PropTypes.string.isRequired
}

export default CustomerLocation;
