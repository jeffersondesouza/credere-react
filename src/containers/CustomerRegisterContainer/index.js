import React from 'react';

import CustomerRegisterFeedback from './../../components/ui/CustomerRegisterFeedback';
import CustomerRegisterForm from './../../components/forms/CustomerRegisterForm';

const CustomerRegisterContainer = () => (
  <section className="register">
    <header className="register__header">
      <h2>Casdastro de Clientes</h2>
    </header>
    <div className="register__body">
      <CustomerRegisterFeedback />
      <CustomerRegisterForm />
    </div>
  </section>

);

export default CustomerRegisterContainer;
