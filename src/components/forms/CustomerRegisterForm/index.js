import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style/CustomerRegisterForm.scss';

import Fieldset from '../../ui/Fieldset';
import Input from '../../ui/Input';
import FormGroup from '../../ui/FormGroup';
import PhonesGroupInput from '../../ui/PhonesGroupInput';
import EmailsGroupInput from '../../ui/EmailsGroupInput';
import ParentInput from '../../ui/ParentInput';
import DriveLicenceInput from '../../ui/DriveLicenceInput';

import { isFormValid, isNameValid, isBirthDayValid, isStateValid, isCityValid, isLicenseValid, isPhonesValid, isEmailsValid, isParentValid } from '../../../utils/customer-form-validator';


const initialState = {

  custumer: {
    id: '',
    name: '',
    birthday: '',
    bornState: '',
    city: '',
    parent: {
      id: '',
      name: '',
      phone: '',
    },
    mainEmail: '',
    mainPhone: '',
    location: '',
    driverLicense: {
      id: '',
      number: '',
      issuedAt: '',
    },
    phones: [],
    emails: [],
  },
  validation: {
    nameValid: false,
    birthdayValid: false,
    cityValid: false,
    bornStateValid: false,
    driverLicenseValid: false,
    phonesValid: { maxPhoneValid: false, minPhoneValid: false, phoneValid: false },
    emailsValid: { minEmailValid: false, maxEmailValid: false },
    parentValid: { parentNameValid: false, parentPhoneValid: false }
  },
  formSubmited: false
}


class CustomerRegisterForm extends Component {

  constructor() {
    super();
    this.formRef = null;

    this.state = { ...initialState };
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.editingCustomer && nextProps.editingCustomer.id) {
      const bornState = nextProps.editingCustomer.state;
      delete nextProps.editingCustomer.state;
      this.setState({
        custumer: { ...nextProps.editingCustomer, bornState }
      });
      return;
    }

  }

  handleChange = ({ name, value }) => {

    this.setState({
      custumer: {
        ...this.state.custumer,
        [name]: value
      }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();


    const isFormValid = this.validateForm();

    if (isFormValid) {
      // this.props.onSubmit(this.state.custumer, this.resetForm);
      console.log('this.state.custumer', this.state.custumer);
    } else {

      this.setState({
        formSubmited: true
      });
    }

  }

  validateForm = () => {

    const { name, birthday, phones, city, driverLicense, bornState, emails, parent } = this.state.custumer;

    const validation = {
      nameValid: isNameValid(name),
      birthdayValid: isBirthDayValid(birthday),
      phonesValid: isPhonesValid(phones),
      cityValid: isCityValid(city, bornState, driverLicense.number),
      driverLicenseValid: isLicenseValid(birthday, driverLicense.number, driverLicense.issueAt),
      bornStateValid: isStateValid(bornState),
      emailsValid: isEmailsValid(emails),
      parentValid: isParentValid(birthday, parent.name, parent.phone)
    }


    this.setState({ validation });

    return isFormValid(validation);

  }

  resetForm = () => {
    this.setState(initialState);
  }

  render() {

    const { name, birthday, phones, city, driverLicense, bornState, emails, parent } = this.state.custumer;
    const { nameValid, birthdayValid, phonesValid, cityValid, driverLicenseValid, bornStateValid, emailsValid, parentValid } = this.state.validation;

    const formSubmited = this.state.formSubmited;

    return (

      <form ref={formRef => this.formRef = formRef} onSubmit={this.handleSubmit} className="form">
        <Fieldset legend="Cliente">

          <FormGroup>
            <Input
              label="Nome"
              name="name"
              value={name || ''}
              errorMsg="Por favor, informe so nome do cliente"
              valid={!formSubmited || nameValid}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              label="Data de Nascimento"
              type="date"
              name="birthday"
              value={birthday || ''}
              valid={!formSubmited || birthdayValid}
              errorMsg="Por favor, informe so nome do cliente"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup >
            <Input
              label="Estado"
              name="bornState"
              value={bornState || ''}
              valid={!formSubmited || bornStateValid}
              errorMsg="Por favor, informe o estado do Clinete"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup >
            <Input
              label="Cidade"
              name="city"
              value={city || ''}
              valid={!formSubmited || cityValid}
              errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Fieldset>


        <Fieldset legend="Carteira de Motorista" sublegend="(Obrigatporio para maiores de idade)">
          <DriveLicenceInput
            name="driverLicense"
            value={driverLicense}
            valid={!formSubmited || driverLicenseValid}
            onChange={this.handleChange}
          />
        </Fieldset>

        <Fieldset legend='Contatos'>
          <FormGroup label="Telefones">
            <PhonesGroupInput
              name="phones"
              phones={phones}
              onChange={this.handleChange}
              validation={phonesValid}
              formSubmited={formSubmited}
            />
          </FormGroup>
          <FormGroup label="Emails">
            <EmailsGroupInput
              name="emails"
              value={emails}
              onChange={this.handleChange}
              validation={emailsValid}
              formSubmited={formSubmited}
            />
          </FormGroup>
        </Fieldset>


        <Fieldset legend='Responsável' sublegend='(Obrigatório para menores de idade)'>
          <ParentInput
            name="parent"
            parent={parent}
            onChange={this.handleChange}
            validation={parentValid}
            formSubmited={formSubmited}
          />
        </Fieldset>


        <div className="form-action">
          <button className="btn btn--block" type="submit">Salvar Cliente</button>
        </div>
      </form>
    );


  }
}

CustomerRegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  editingCustumer: PropTypes.object
}

export default CustomerRegisterForm;



