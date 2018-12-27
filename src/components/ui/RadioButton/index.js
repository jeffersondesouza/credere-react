import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

class RadioButton extends Component {

  render() {

    return (
      <label className="phone__main-phone">

        <Input
          className="phone__radio"
          type="radio"
          name={this.props.name}
          clazz="phone__radio"
          onChange={this.props.onChange}
        />
        <span>{this.props.label}</span>

      </label>
    );
  }
}

RadioButton.propTypes = {
  clazz: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  errorMsg: PropTypes.string
}

export default RadioButton;