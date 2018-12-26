import React from 'react';
import PropTypes from 'prop-types';

import CustomerEmail from './CustomerEmail';
import CustomerLocation from './CustomerLocation';
import CustomerPhone from './CustomerPhone';



function phoneNumber(phones) {
  const mainPhone = phones.find(phone => phone.main) || phones[0];
  return <span>({mainPhone.code})-{mainPhone.number} </span>;
}

function email(emails) {
  const mainEmail = emails.find(email => email.main) || emails[0];
  return mainEmail.address;
}

function location(city, state) {
  return <span>{city ? city : 'cidade não informada'},&nbsp;{state}</span>;
}

const CustomerItem = ({ customer }) => (
  <li className="customer">
    <div className="customer__info">
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
      <div className="customer__contact">
        <div className="customer__contact-header">
          <CustomerPhone phone={customer.mainPhone} />
          <CustomerEmail email={customer.mainEmail} />
        </div>
        <CustomerLocation location={customer.location} />
      </div>
    </div>

    <div className="customer__actions">
      <button className="btn btn--round btn--icon btn--edit" type="button" name="edit" value="${customer.id}"><i className="icon-pencil"></i></button>
      <button className="btn btn--round btn--icon btn--danger" type="button" name="delete" value="${customer.id}"><i className="icon-trash"></i></button>
    </div>
  </li>
);

CustomerItem.propTypes = {
  customer: PropTypes.object.isRequired
}

export default CustomerItem;
