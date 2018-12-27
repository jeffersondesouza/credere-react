import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import PhoneInput from '../PhoneInput';

class ParentInput extends Component {

  constructor() {
    super();
    this.state = {
      value: {}
    };
  }

  handleChange = (name, value) => {
    this.setState(
      { value: { [name]: value } },
      () => this.props.onChange({ name: this.props.name, value: this.state.value })
    );
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMsg: PropTypes.string
}


export default ParentInput;