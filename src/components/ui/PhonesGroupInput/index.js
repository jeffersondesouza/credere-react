import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhoneInput from '../PhoneInput';
import AddMoreButton from '../AddMoreButton/AddMoreButton';

class PhonesGroupInput extends Component {

  constructor() {
    super();
    this.state = {
      phones: [
        { name: `0`, code: '', number: '', destroy: false }
      ]
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.phones && nextProps.phones.length) {

      const phones = nextProps.phones.map((phone, i) => ({
        ...phone,
        name: `${i}`
      }));

      this.setState({
        phones
      });
      
    } else {
      this.setState({
        phones: [
          { name: `0`, code: '', number: '', destroy: false }
        ]
      })
    }
  }

  handleChange = ({ name, value }) => {

    const phones = this.state.phones
      .map(phone => {
        if (phone.name === name) {
          return { ...phone, ...value }
        }
        return { ...phone }
      });


    this.setState({
      phones: [...phones]
    },
      () => this.props.onChange({ name: this.props.name, value: this.state.phones })
    );

  }

  addPhoneInput = () => {

    const phones = [
      ...this.state.phones,
      { name: `${this.state.phones.length++}`, code: '', number: '', destroy: false }
    ];

    this.setState({ phones });
  }


  render() {
    const { phones } = this.state;
    const { validation, formSubmited } = this.props;
    return (
      <div>
        <ul>
          {
            phones.map((phone, i) =>
              <li key={phone.id || i}>
                <PhoneInput
                  name={`${i}`}
                  phone={phone}
                  valid={validation.phoneValid || !formSubmited}
                  showMainPhone={true}
                  showBtnDestroy={true}
                  onChange={this.handleChange} />
              </li>
            )
          }
        </ul>
        {(!validation.minPhoneValid && formSubmited) && <p className="feedback-error">Por favor, informe pelo menos um telefone</p>}
        {(!validation.maxPhoneValid && formSubmited) && <p className="feedback-error">Você pode cadastrar no máxio 4 (quatro) telefones</p>}
        <AddMoreButton onClick={this.addPhoneInput} />
      </div>
    );
  }
}

PhonesGroupInput.propTypes = {
  name: PropTypes.string.isRequired,
  phones: PropTypes.array,
  errorMsg: PropTypes.string
}


export default PhonesGroupInput;