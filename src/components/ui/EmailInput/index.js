import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EmailInput extends Component {

  handleChange = e => {
    const target = event.target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;

    this.props.onChange(value, this.props.name)

  }

  render() {
    const { clazz, type, value, label, errorMsg, } = this.props;

    return (
      <div className="emails__item">
        <input onChange={this.handleChange} hidden={true} />
        <input onChange={this.handleChange} type="checkbox" className="emails__item-remove" />
        <input onChange={this.handleChange} type="email" className="input" />
      </div>
    );
  }
}

/* EmailInput.propTypes = {
  clazz: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  errorMsg: PropTypes.string
} */


export default EmailInput;