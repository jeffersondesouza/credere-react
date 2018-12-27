import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input';
import RadioButton from '../RadioButton';

class PhoneInput extends Component {

  constructor() {
    super();
    this.state = {
      id: '',
      code: '',
      number: '',
      name: '',
      destroy: false,
      mainPhone: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.phone && nextProps.phone.code && nextProps.phone.number) {
      this.setState({
        ...this.state,
        ...nextProps.phone,
        id: nextProps.phone.id,
        code: nextProps.phone.code,
        number: nextProps.phone.number,
      });
    }
  }


  handleChangeCode = ({ name, value }) => {
    this.setState(
      {
        ...this.state,
        code: value
      },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }

  handleChangeNumber = ({ name, value }) => {
    this.setState(
      {
        ...this.state,
        number: value
      },
      () => this.props.onChange({ name: this.props.name, value: this.state })
    );
  }


  render() {
    const { showMainPhone } = this.props;
    const { code, number } = this.state;

    const codeProp = this.props.code;
    const numberProp = this.props.number;

    return (
      <div>
        <div className="phones__item">
          <div className="phone">
            <Input
              value={code || codeProp}
              clazz="input phone__code"
              placeholder="88"
              onChange={this.handleChangeCode}
            />
            <Input
              value={number || numberProp}
              clazz="input phone__number"
              placeholder="8888-8888"
              onChange={this.handleChangeNumber}
            />

            {showMainPhone && <RadioButton name="mainPhone" label="Principal" onChange={this.handleChange} />}

          </div>
          <input onChange={this.handleChange} type="checkbox" className="phones__remove-check" />
        </div>
        <p className="feedback-error">Por favor, informe o DDD e número</p>
      </div>
    );
  }
}

PhoneInput.propTypes = {
  name: PropTypes.string,
  code: PropTypes.string,
  number: PropTypes.string,
  value: PropTypes.object,
  phone: PropTypes.object,
  label: PropTypes.string,
  errorMsg: PropTypes.string
}


export default PhoneInput;