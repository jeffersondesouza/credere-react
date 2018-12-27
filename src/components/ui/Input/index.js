import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  handleChange = e => {
    const target = event.target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;

    this.props.onChange(this.props.name, value)
  }

  render() {
    const { clazz, type, value, placeholder, label, errorMsg, } = this.props;

    return (
      <label>
        {label}
        <input
          onChange={this.handleChange}
          type={type || 'text'}
          placeholder={placeholder}
          className={clazz || 'input'} />
        <p className="feedback-error">{errorMsg}</p>
      </label>
    );
  }
}

Input.propTypes = {
  clazz: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  errorMsg: PropTypes.string
}


export default Input;