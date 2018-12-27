import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from '../PhoneInput';
import AddMoreButton from '../AddMoreButton/AddMoreButton';

class PhonesGroupInput extends Component {

  constructor() {
    super();
    this.state = {
      value: {},
      phonesInputs: []
    };
  }

  componentDidMount() {
    this.addPhoneInput();
  }

  handleChange = ({ name, value }) => {

    console.log('Inputs', this.state.phonesInputs);


    const phones = this.state.phonesInputs.map(phone => {
      if (phone.name === name) {
        return { ...phone, code: value.code, number: value.number }
      }
      return { ...phone }
    });


    this.setState({
      phonesInputs: [...phones]
    },
      () => this.props.onChange({ name: this.props.name, value: this.state.phonesInputs })
    );
   
  }

  addPhoneInput = (value) => {
    this.setState({
      phonesInputs: [...this.state.phonesInputs, {
        name: `${this.state.phonesInputs.length++}`,
        code: value ? value.code : '',
        number: value ? value.number : ''
      }]
    });
  }




  render() {
    const { clazz, type, value, label, errorMsg } = this.props;
    const { phonesInputs } = this.state;

    return (
      <div>
        <ul>
          {
            phonesInputs.map((phone, i) =>
              <li key={i}>
                <PhoneInput
                  name={phone.name}
                  code={phone.code}
                  number={phone.number}
                  onChange={this.handleChange} />
              </li>)
          }
        </ul>
        <p className="feedback-error">Por favor, informe pelo menos um telefone</p>
        <p className="feedback-error">Você pode cadastrar no máxio 4 (quatro) telefones</p>
        <AddMoreButton onClick={this.addPhoneInput} />
      </div>
    );
  }
}

PhonesGroupInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMsg: PropTypes.string
}


export default PhonesGroupInput;