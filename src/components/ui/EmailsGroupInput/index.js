import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMoreButton from '../AddMoreButton/AddMoreButton';
import EmailInput from '../EmailInput';

class EmailsGroupInput extends Component {

  constructor() {
    super();
    this.state = {
      emailInputs: [{ name: '0', address: '' }]
    };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.value && nextProps.value.length) {

      const emails = nextProps.value.map((email, i) => ({
        name: `${i++}`,
        address: email.address,
      }));

      this.setState({
        emailInputs: [...emails]
      });
    } else {
      this.setState({
        emailInputs: [{ name: '0', address: '' }]
      })
    }
  }

  handleChange = ({ name, value }) => {

    const emails = this.state.emailInputs.map(email => {
      if (email.name === name) {
        return { ...email, ...value }
      }
      return { ...email }
    });

    this.setState({
      emailInputs: [...emails]
    },
      () => {
        this.props.onChange({ name: this.props.name, value: this.state.emailInputs })
      });

  }

  addEmailInput = (value) => {
    this.setState({
      emailInputs: [...this.state.emailInputs, {
        name: `${this.state.emailInputs.length++}`,
        address: value ? value.address : '',
      }]
    });
  }



  render() {
    const { emailInputs } = this.state;
    const { validation, formSubmited } = this.props;

    return (
      <div>
        <ul>
          {
            emailInputs.map((email, i) =>
              <li key={i}>
                <EmailInput
                  name={`${i}`}
                  value={email.address}
                  onChange={this.handleChange}
                />
              </li>)
          }
        </ul>
        {(!validation.minEmailValid && formSubmited) && <p className="feedback-error">Por favor, informe pelo menos um email</p>}
        {(!validation.maxEmailValid && formSubmited) && <p className="feedback-error">Você pode cadastrar no máxio 3 (três) emails</p>}
        <AddMoreButton onClick={this.addEmailInput} />
      </div>
    );
  }
}

EmailsGroupInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array,
  errorMsg: PropTypes.string
}


export default EmailsGroupInput;