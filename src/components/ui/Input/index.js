import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Input extends Component {

  handleChange = e => {
    const target = event.target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;

    this.props.onChange({ name: this.props.name, value })
  }

  render() {
    const { clazz, type, name, value, placeholder, label, errorMsg, } = this.props;

    return (
      <div className="input-div">
        <label>{label}</label>
        <input
          name={name || ''}
          onChange={this.handleChange}
          type={type || 'text'}
          placeholder={placeholder}
          className={clazz || 'input'} />
        <p className="feedback-error">{errorMsg}</p>
      </div>
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