import React from 'react';

const CustomerItem = () => (
  <li className="customer">
    <div className="customer__info">
      <header className="customer__header">
        <h3 className="customer__title">customer.name</h3>
        <div className="customer__licence">
          <p title="licença"><i className="icon-address-card-o customer__licence-icon"></i>customer.driver_license ? (customer.driver_license.number) : ''</p>
          <p title="Data de Emissão"><i className="icon-calendar-empty customer__licence-icon"></i>customer.driver_license ? (customer.driver_license.issued_at) : ''</p>
          {/* ${customer.driver_license ? (``): ''} */}
        </div>
      </header>
      <div className="customer__contact">
        <div className="customer__contact-header">
          <p className="customer__contact-phone"><i className="icon-phone"></i>phoneNumber(customer.phones)</p>
          <p className="customer__contact-email"><i className="icon-mail"></i>email(customer.emails)</p>
        </div>
        <p className="customer__contact-location"><i className="icon-location "></i>location(customer.city, customer.state)</p>
      </div>
    </div>

    <div className="customer__actions">
      <button className="btn btn--round btn--icon btn--edit" type="button" name="edit" value="${customer.id}"><i className="icon-pencil"></i></button>
      <button className="btn btn--round btn--icon btn--danger" type="button" name="delete" value="${customer.id}"><i className="icon-trash"></i></button>
    </div>

  </li>
);

export default CustomerItem;
