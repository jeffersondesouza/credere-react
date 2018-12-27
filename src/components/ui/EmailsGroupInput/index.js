import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMoreButton from '../AddMoreButton/AddMoreButton';
import EmailInput from '../EmailInput';

class EmailsGroupInput extends Component {

  constructor() {
    super();
    this.state = {
      emailInputs: []
    };
  }


  componentDidMount() {
    this.addEmailInput();
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
      () => this.props.onChange({ name: this.props.name, value: this.state.emailInputs })
    );

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
    const { clazz, type, value, label, errorMsg, } = this.props;
    const { emailInputs } = this.state;

    return (
      <div>
        <ul>
          {
            emailInputs.map((email, i) =>
              <li key={i}>
                <EmailInput
                  name={email.name}
                  address={email.address}
                  onChange={this.handleChange} />
              </li>)
          }
        </ul>
        <p className="feedback-error">Por favor, informe pelo menos um telefone</p>
        <p className="feedback-error">Você pode cadastrar no máxio 4 (quatro) telefones</p>
        <AddMoreButton onClick={this.addEmailInput} />
      </div>
    );
  }
}

EmailsGroupInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  errorMsg: PropTypes.string
}


export default EmailsGroupInput;