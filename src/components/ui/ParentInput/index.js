import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import PhoneInput from '../PhoneInput';

class ParentInput extends Component {

  handleChange = e => {
    const target = event.target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;

    this.props.onChange(value, this.props.name)

  }

  render() {
    const { clazz, type, value, label, errorMsg, } = this.props;

    return (
      <div className="form-parent">
        <div className="form-parent__inputs">
          <Input
            label="Nome"
            name="parent-name"
            errorMsg="Por favor, informe o nome do seu responsável"
            onChange={this.handleChange}
          />
          <div id="parent" className="form-group">
            <label >Telefone</label>
            <PhoneInput />
            <p id="parentPhoneValidation" hidden className="feedback-error">
              Por favor, informe corretamente o telefone responsável legal
          </p>
          </div>
        </div>
        <div className="form-parent__delete">
          <label className="btn--icon-label ">
            <input onChange={this.handleChange} id="licenseDestroy" type="checkbox" name="parentDestroy" />
            <i className="icon-trash icon--danger"></i>
          </label>
        </div>
      </div>
    );
  }
}

ParentInput.propTypes = {
  clazz: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  errorMsg: PropTypes.string
}


export default ParentInput;