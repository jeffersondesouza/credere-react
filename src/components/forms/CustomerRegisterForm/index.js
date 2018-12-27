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


class CustomerRegisterForm extends Component {

  constructor() {
    super();
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state)

  }

  handleChange = (value, name) => {
    console.log('changes', value, name);

    this.setState({
      [name]: value
    });
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
          <DriveLicenceInput name="driveLicense" />
        </Fieldset>


        <Fieldset legend='Contatos'>
          <FormGroup label="Telefones">
            <PhonesGroupInput name="phones"/>
          </FormGroup>
          <FormGroup label="Emails">
            <EmailsGroupInput name="emails"/>
          </FormGroup>
        </Fieldset>


        <Fieldset legend='Responsável' sublegend='(Obrigatório para menores de idade)'>
          <ParentInput name="parent"/>
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
