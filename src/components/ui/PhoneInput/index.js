import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import RadioButton from '../RadioButton';

class PhoneInput extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      code: '',
      number: '',
      destroy: false,
      mainPhone: false
    };
  }


  handleChange = (name, inputValue) => {
    this.setState(
      {
        ...this.state,
        [name]: inputValue
      },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }

  render() {
    const { clazz, type, value, label, errorMsg, showMainPhone} = this.props;

    return (
      <div>
        <div className="phones__item">
          <div className="phone">
            <Input
              name="code"
              clazz="input phone__code"
              placeholder="88"
              onChange={this.handleChange}
            />
            <Input
              name="number"
              clazz="input phone__number"
              placeholder="8888-8888"
              onChange={this.handleChange}
            />

            { showMainPhone && <RadioButton name="mainPhone" label="Principal" onChange={this.handleChange} /> }

          </div>
          <input onChange={this.handleChange} type="checkbox" className="phones__remove-check" />
        </div>
        <p className="feedback-error">Por favor, informe o DDD e número</p>
      </div>
    );
  }
}

PhoneInput.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  number: PropTypes.string,
  value: PropTypes.object,
  label: PropTypes.string,
  errorMsg: PropTypes.string
}


export default PhoneInput;