import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  handleChange = e => {
    const target = event.target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;

    this.props.onChange(value, this.props.name)

  }

  render() {
    const { clazz, type, value, label, errorMsg, } = this.props;

    return (
      <div>
        <input onChange={this.handleChange} type={type || 'text'} className={clazz || 'input'} />
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