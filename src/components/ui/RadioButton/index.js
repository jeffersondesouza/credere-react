import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

import './styles.scss';

class RadioButton extends Component {

  render() {

    return (
      <label className="radio">
        <Input
          type="radio"
          name={this.props.name}
          clazz="radio__input"
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