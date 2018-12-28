import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import RadioButton from '../RadioButton';
import Input from '../Input';
import RemoveButton from '../RemoveButton';

class EmailInput extends Component {


  constructor() {
    super();
    this.state = {
      id: '',
      address: '',
      destroy: false,
      mainEmail: false
    };
  }


  handleChange = ({ name, value }) => {
    this.setState({
      ...this.state,
      [name]: value
    },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }

  handleChangeMainEmail = ({ value }) => {
    this.setState({
      mainEmail: value
    },
      () => this.props.onChange({
        name: this.props.name,
        value: { ...this.props, mainEmail: value }
      })
    );
  }

  handleRemoveClick = () => {

    this.setState({
      ...this.state,
      destroy: true
    },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }
  render() {
    const { value } = this.props;
    const { destroy, mainEmail } = this.state;

    return (!destroy &&
      <div className="email-input">
        <div className="email-input__wrapper">
          <Input
            name="address"
            type="email"
            value={value || ''}
            onChange={this.handleChange}
          />
        </div>
        <RadioButton
          name="mainEmail"
          label="Principal"
          onChange={this.handleChangeMainEmail}
        />
        <RemoveButton onClick={this.handleRemoveClick} />
      </div>
    );
  }
}

EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
  clazz: PropTypes.string,
  type: PropTypes.string,
  address: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  errorMsg: PropTypes.string
}


export default EmailInput;