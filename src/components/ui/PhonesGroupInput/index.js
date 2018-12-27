import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from '../PhoneInput';
import AddMoreButton from '../AddMoreButton/AddMoreButton';

class PhonesGroupInput extends Component {

  constructor() {
    super();
    this.state = {
      phonesInputs: []
    };
  }

  componentDidMount() {
    this.addPhoneInput();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value.length) {

      const phones = nextProps.value.map((phone, i) => ({
        name: `${i++}`,
        code: phone.code,
        number: phone.number
      }));

      this.setState({
        phonesInputs: [...phones]
      });
    }
  }

  handleChange = ({ name, value }) => {

    const phones = this.state.phonesInputs
      .map(phone => {
        if (phone.name === name) {
          return { ...phone, ...value }
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
      phonesInputs: [
        ...this.state.phonesInputs,
        {
          name: `${this.state.phonesInputs.length++}`,
          code: value ? value.code : '',
          number: value ? value.number : ''
        }]
    });
  }


  render() {
    const { phonesInputs } = this.state;
    console.log('phonesInputs', phonesInputs);


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
  value: PropTypes.array,
  errorMsg: PropTypes.string
}


export default PhonesGroupInput;