import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from '../PhoneInput';
import AddMoreButton from '../AddMoreButton/AddMoreButton';

class EmailsGroupInput extends Component {

  handleChange = e => {
    const target = event.target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;

    this.props.onChange(value, this.props.name)

  }

  render() {
    const { clazz, type, value, label, errorMsg, } = this.props;

    return (
      <div>
        <ul>
          <li><PhoneInput /></li>
        </ul>
        <p className="feedback-error">Por favor, informe pelo menos um telefone</p>
        <p className="feedback-error">Você pode cadastrar no máxio 4 (quatro) telefones</p>
        <AddMoreButton />
      </div>
    );
  }
}

EmailsGroupInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMsg: PropTypes.string
}


export default EmailsGroupInput;