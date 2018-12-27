import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

import PhoneInput from '../PhoneInput';
import FormGroup from '../FormGroup';

class ParentInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      phone: {}
    };
  }

  handleChange = ({ name, value }) => {
    this.setState(
      { [name]: value },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }


  render() {
    const { clazz, type, value, label, errorMsg, } = this.props;

    return (
      <div className="form-parent">
        <div className="form-parent__inputs">
          <FormGroup label="Nome">
            <Input
              name="name"
              errorMsg="Por favor, informe o nome do seu responsável"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup label="Telefone">
            <PhoneInput name="phone" onChange={this.handleChange} showMainPhone={false} />
          </FormGroup>

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
  value: PropTypes.object,
  errorMsg: PropTypes.string
}


export default ParentInput;