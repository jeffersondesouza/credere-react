import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton';
import Input from '../Input';

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


  handleChange = ({name, value}) => {
    this.setState({
      ...this.state,
      [name]: value
    },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }


  render() {
    const { value } = this.props;

    return (
      <div className="emails__item">
        <Input
          name="address"
          type="email"
          value={value || ''}
          onChange={this.handleChange}
        />

        <RadioButton name="mainPhone" label="Principal" onChange={this.handleChange} />
        <input onChange={this.handleChange} type="checkbox" className="emails__item-remove" />

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