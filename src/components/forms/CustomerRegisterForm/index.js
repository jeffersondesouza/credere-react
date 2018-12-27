import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './style/CustomerRegisterForm.scss';

import Fieldset from '../../ui/Fieldset';
import Input from '../../ui/Input';
import FormGroup from '../../ui/FormGroup';
import PhoneInput from '../../ui/PhoneInput';
import EmailInput from '../../ui/EmailInput';
import AddMoreButton from '../../ui/AddMoreButton/AddMoreButton';
import PhonesGroupInput from '../../ui/PhonesGroupInput';
import EmailsGroupInput from '../../ui/EmailsGroupInput';
import ParentInput from '../../ui/ParentInput';


class CustomerRegisterForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    // this.props.onSubmit(this.state.customer)

  }

  handleChange = (value, name) => {
    console.log('name', value, name);
  }


  render() {

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <Fieldset legend="Cliente">

          <FormGroup>
            <Input
              label="Nome"
              name="name"
              errorMsg="Por favor, informe so nome do cliente"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Input
              label="Data de Nascimento"
              type="date"
              name="birthdate"
              errorMsg="Por favor, informe sua data de nascimento"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup >
            <Input
              label="Estado"
              name="state"
              errorMsg="Por favor, informe o estado do Clinete"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup >
            <Input
              label="Cidade"
              name="city"
              errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
              onChange={this.handleChange}
            />
          </FormGroup>
        </Fieldset>

        <Fieldset legend="Carteira de Motorista" sublegend="(Obrigatporio para maiores de idade)">
          <div className="form-license">
            <div className="form-license__inputs">
              <FormGroup>
                <Input
                  label="Número"
                  name="driver-license-number"
                  errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Input
                label="Data de Emissão"
                type="date"
                name="driver-license-issueda-at"
                errorMsg="Por favor informe os dados de Sua Carteira de Motorista"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-license__delete">
              <label className="btn--icon-label">
                <input onChange={this.handleChange} id="licenseDestroy" type="checkbox" name="licenseDestroy" />
                <i className="icon-trash icon--danger"></i>
              </label>
            </div>
          </div>

        </Fieldset>


        <Fieldset legend='Contatos'>
          <FormGroup label="Telefones">
            <PhonesGroupInput />
          </FormGroup>
          <FormGroup label="Emails">
            <EmailsGroupInput />
          </FormGroup>
        </Fieldset>



        <Fieldset legend='Responsável' sublegend='(Obrigatório para menores de idade)'>
          <ParentInput />
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
