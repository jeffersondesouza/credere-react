import React from 'react';
import PropTypes from 'prop-types';

const CustomerNameSumary = ({ customer }) => (
  <header className="customer__header">
    <h3 className="customer__title">{customer.name}</h3>
    <div className="customer__licence">
      <p title="licença">
        {customer.driver_license && <i className="icon-address-card-o customer__licence-icon"></i>}
        {customer.driver_license && (customer.driver_license.number)}
      </p>
      <p title="Data de Emissão">
        {customer.driver_license && <i className="icon-calendar-empty customer__licence-icon"></i>}
        {customer.driver_license && (customer.driver_license.issued_at)}
      </p>
    </div>
  </header>
);

CustomerNameSumary.propTypes = {
  customer: PropTypes.object.isRequired
}

export default CustomerNameSumary;
