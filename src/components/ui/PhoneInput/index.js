import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';

class PhoneInput extends Component {

  constructor() {
    super();
    this.state = {
      code: '',
      number: ''
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
    const { clazz, type, value, label, errorMsg, } = this.props;

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

            <label className="phone__main-phone">
              <input onChange={this.handleChange} className="phone__radio" type="radio" name="mainFone" />
              <span>Principal</span>
            </label>
          </div>
          <input onChange={this.handleChange} type="checkbox" className="phones__remove-check" />
        </div>
        <p className="feedback-error">Informe o DDD e número</p>
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