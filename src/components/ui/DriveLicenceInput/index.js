import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import Input from '../Input';

class DriveLicenceInput extends Component {

  constructor() {
    super();
    this.state = {
      number: '',
      issueAt: ''
    };
  }

  handleChange = ({ name, value }) => {
    console.log('name, value ', name, value );
    this.setState(
      { [name]: value },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }

  render() {
    const { clazz, type, value, label, errorMsg, } = this.props;

    return (
      <div className="form-license">
        <div className="form-license__inputs">
          <FormGroup>
            <Input
              label="Número"
              name="number"
              errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Input
            label="Data de Emissão"
            type="date"
            name="issueAt"
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