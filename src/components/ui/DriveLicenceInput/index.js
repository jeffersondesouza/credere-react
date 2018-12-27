import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import Input from '../Input';

class DriveLicenceInput extends Component {

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
      <div className="form-license">
        <div className="form-license__inputs">
          <FormGroup>
            <Input
              label={"Número"}
              name="driver-license-number"
              errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Input
            label="Data de Emissão"
            type="date"
            name="driver-license-issueda-at"
            errorMsg="Por favor informe os dados de Sua Carteira de Motorista"
            onChange={this.handleChange}
          />
        </div>
        <div className="form-license__delete">
          <label className="btn--icon-label">
            <input onChange={this.handleChange} id="licenseDestroy" type="checkbox" name="licenseDestroy" />
            <i className="icon-trash icon--danger"></i>
          </label>
        </div>
      </div>

    );
  }
}



DriveLicenceInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMsg: PropTypes.string
}

export default DriveLicenceInput;
