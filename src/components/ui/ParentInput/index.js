import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

import PhoneInput from '../PhoneInput';
import FormGroup from '../FormGroup';

class ParentInput extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      phone: {
        id: '',
        code: '',
        number: '',
      }
    };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.parent && nextProps.parent.phone) {
      this.setState({
        ...this.state,
        ...nextProps.parent,
      });
    } else {
      this.setState({
        id: '',
        name: '',
        phone: {
          id: '',
          code: '',
          number: '',
        }
      });
    }
  }


  handleChange = ({ name, value }) => {
    this.setState(
      { [name]: value },
      () => {
          this.props.onChange({ name: this.props.name, value: this.state })
      });
  }


  render() {
    const { name, phone } = this.state;
    const { validation, formSubmited } = this.props;
    return (
      <div className="form-parent">
        <div className="form-parent__inputs">
          <FormGroup label="Nome">
            <Input
              name="name"
              value={name}
              errorMsg="Por favor, informe o nome do seu responsável"
              valid={validation.parentNameValid || !formSubmited}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup label="Telefone">
            <PhoneInput
              name="phone"
              phone={phone}
              onChange={this.handleChange}
              valid={validation.parentPhoneValid || !formSubmited}
              showMainPhone={false} />
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
  parent: PropTypes.object,
  errorMsg: PropTypes.string,
  validation: PropTypes.object
}


export default ParentInput;