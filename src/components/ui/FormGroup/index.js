import React from 'react';
import EmailInput from '../EmailInput';

const FormGroup = (props) => (
  <div>
    <ul id="emails">
      <li>
        <EmailInput name="email" />
      </li>
    </ul>
    <p id="minEmailValidation" hidden className="feedback-error">Por favor, informe pelo menos um email</p>
    <p id="maxEmailValidation" hidden className="feedback-error">Você pode cadastrar no máxio 3 (três) emails</p>
  </div>
);

export default FormGroup;