import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './style/CustomerRegisterForm.scss';

import Fieldset from '../../ui/Fieldset';
import Input from '../../ui/Input';
import FormGroup from '../../ui/FormGroup';
import PhoneInput from '../../ui/PhoneInput';
import EmailInput from '../../ui/EmailInput';


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

          <FormGroup label="Nome">
            <Input
              name="name"
              errorMsg="Por favor, informe so nome do cliente"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup label="Data de Nascimento">
            <Input
              type="date"
              name="birthdate"
              errorMsg="Por favor, informe sua data de nascimento"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup label="Estado">
            <Input
              name="state"
              errorMsg="Por favor, informe o estado do Clinete"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup label="Cidade">
            <Input
              name="city"
              errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
              onChange={this.handleChange}
            />
          </FormGroup>

        </Fieldset>

        <Fieldset legend="Carteira de Motorista" sublegend="(Obrigatporio para maiores de idade)">
          <div className="form-license">
            <div className="form-license__inputs">
              <Input
                label="Número"
                name="driver-license-number"
                errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
                onChange={this.handleChange}
              />
              <Input
                label="Data de Emissão"
                type="date"
                name="driver-license-issueda-at"
                errorMsg="Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-license__delete">
              <label className="btn--icon-label">
                <input onChange={this.handleChange} id="licenseDestroy" type="checkbox" name="licenseDestroy" />
                <i className="icon-trash icon--danger"></i>
              </label>
            </div>
            <p id="licenseValidation" hidden className="feedback-error">
              Por favor informe os dados de Sua Ccarteira de Motorista
      </p>
          </div>

        </Fieldset>


        <Fieldset legend='Contatos'>
          <div className="form-group">
            <label >Telefones</label>
            <ul id="phones">
              <li>
                <PhoneInput />
              </li>
            </ul>
            <p className="feedback-error">Por favor, informe pelo menos um telefone</p>
            <p className="feedback-error">Você pode cadastrar no máxio 4 (quatro) telefones</p>
            <p className="feedback-error">Informe o DDD e numeros para todos os telefones</p>
            <button id="addMorePhonesBtn" className="btn btn--icon btn--add" type="button">
              <i className="icon-plus"></i>Adiconar Mais</button>
          </div>

          <div className="form-group">
            <label >Emails</label>
            <ul id="emails">
              <li>
                <EmailInput name="email" />
              </li>
            </ul>
            <p id="minEmailValidation" hidden className="feedback-error">Por favor, informe pelo menos um email</p>
            <p id="maxEmailValidation" hidden className="feedback-error">Você pode cadastrar no máxio 3 (três) emails</p>

            <button id="addMoreEmailBtn" className="btn btn--icon btn--add" type="button">
              <i className="icon-plus"></i>
              Adiconar Mais
      </button>

          </div>
        </Fieldset>



        <Fieldset legend='Responsável' sublegend='(Obrigatório para menores de idade)'>
          <div className="form-parent">
            <div className="form-parent__inputs">
              <Input
                label="Nome"
                name="parent-name"
                errorMsg="Por favor, informe o nome do seu responsável"
                onChange={this.handleChange}
              />
              <div id="parent" className="form-group">
                <label >Telefone</label>
                <PhoneInput />
                <p id="parentPhoneValidation" hidden className="feedback-error">
                  Por favor, informe corretamente o telefone responsável legal
                </p>
              </div>
            </div>
            <div className="form-parent__delete">
              <label className="btn--icon-label ">
                <input onChange={this.handleChange} id="licenseDestroy" type="checkbox" name="parentDestroy" />
                <i className="icon-trash icon--danger"></i>
              </label>
            </div>
          </div>
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
