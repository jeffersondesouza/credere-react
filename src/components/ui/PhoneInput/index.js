import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhoneInput extends Component {

  handleChange = e => {
    const target = event.target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;

    this.props.onChange(value, this.props.name)

  }

  render() {
    const { clazz, type, value, label, errorMsg, } = this.props;

    return (
      <div className="phones__item">
        <input onChange={this.handleChange} hidden={true} />
        <input onChange={this.handleChange} type="checkbox" className="phones__remove-check" />
        <div className="phone">
          <input onChange={this.handleChange} className="input phone__code" placeholder="88" />
          <input onChange={this.handleChange} className="input phone__number" placeholder="8888-8888" />
          <label className="phone__main-phone">
            <input onChange={this.handleChange} className="phone__radio" type="radio" name="mainFone" />
            <span>Principal</span>
          </label>
        </div>
      </div>
    );
  }
}

/* PhoneInput.propTypes = {
  clazz: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  errorMsg: PropTypes.string
}
 */

export default PhoneInput;