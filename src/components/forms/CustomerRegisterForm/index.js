import React from 'react';

import './style/CustomerRegisterForm.scss';

const CustomerRegisterForm = () => (

  <form id="form-view" className="form">
    <input id="id" name="id" hidden type="text" name="name" />

    <fieldset className="fieldset">
      <legend className="legend">Cliente</legend>
      <div className="form-group">
        <label >Nome</label>
        <input className="input" id="name" type="text" name="name" />
        <p id="nameValidation" hidden className="feedback-error">Por favro, informe seu nome</p>
      </div>
      <div className="form-group">
        <label >Data de Nascimento</label>
        <input className="input" id="birthday" type="date" name="birthday" />
        <p id="birthdayValidation" hidden className="feedback-error">Por favor, informe sua data de nascimento</p>
      </div>

      <div className="form-group">
        <label >Estado</label>
        <input className="input" id="state" type="text" name="state" />
        <p id="stateValidation" hidden className="feedback-error">Por favor, informe seu estado</p>
      </div>


      <div className="form-group">
        <label >Cidade</label>
        <input className="input" id="city" type="text" name="city" />
        <p id="cityValidation" hidden className="feedback-error">
          Se você Potiguar e sua Licença começa com 6 por favor informe sua Cidade
  </p>
      </div>
    </fieldset>

    <fieldset className="fieldset">
      <legend className="legend">
        <div className="legend__title">Carteira de Motorista</div>
        <div className="legend__subtitle">(Obrigatporio para maiores de idade)</div>
      </legend>

      <div className="form-license">
        <div className="form-license__inputs">
          <div className="form-group">
            <label >Número</label>
            <input className="input" id="licenseId" name="licenseId" hidden type="text" />
            <input className="input" id="licenseDate" type="text" name="licenseDate" />
          </div>
          <div className="form-group">
            <label >Data de Emissão</label>
            <input className="input" id="licenseIssueAt" type="text" name="licenseIssueAt" />
          </div>
        </div>
        <div className="form-license__delete">
          <label className="btn--icon-label">
            <input id="licenseDestroy" type="checkbox" name="licenseDestroy" />
            <i className="icon-trash icon--danger"></i>
          </label>
        </div>
        <p id="licenseValidation" hidden className="feedback-error">
          Por favor informe os dados de Sua Ccarteira de Motorista
  </p>
      </div>
    </fieldset>


    <fieldset className="fieldset">
      <legend className="legend">Contatos</legend>
      <div className="form-group">
        <label >Telefones</label>

        <ul id="phones">
          <li className="phones__item">
            <input hidden={true} />
            <input type="checkbox" className="phones__remove-check" />
            <div className="phone">
              <input className="input phone__code" placeholder="88" />
              <input className="input phone__number" placeholder="8888-8888" />
              <label className="phone__main-phone">
                <input className="phone__radio" type="radio" name="mainFone" />
                <span>Principal</span>
              </label>
            </div>
          </li>
        </ul>

        <p id="minPhoneValidation" hidden className="feedback-error">
          Por favor, informe pelo menos um telefone
  </p>
        <p id="maxPhoneValidation" hidden className="feedback-error">
          Você pode cadastrar no máxio 4 (quatro) telefones
  </p>
        <p id="phoneValidation" hidden className="feedback-error">Informe o DDD e numeros para todos os telefones</p>


        <button id="addMorePhonesBtn" className="btn btn--icon btn--add" type="button">
          <i className="icon-plus"></i>
          Adiconar Mais
  </button>

      </div>

      <div className="form-group">
        <label >Emails</label>
        <ul id="emails">
          <li className="emails__item">
            <input hidden={true} />
            <input type="checkbox" className="emails__item-remove" />
            <input type="email" className="input" />
          </li>
        </ul>
        <p id="minEmailValidation" hidden className="feedback-error">Por favor, informe pelo menos um email</p>
        <p id="maxEmailValidation" hidden className="feedback-error">Você pode cadastrar no máxio 3 (três) emails</p>

        <button id="addMoreEmailBtn" className="btn btn--icon btn--add" type="button">
          <i className="icon-plus"></i>
          Adiconar Mais
  </button>

      </div>
    </fieldset>


    <fieldset className="fieldset" id="parent">
      <legend className="legend">
        <div className="legend__title">Responsável </div>
        <div className="legend__subtitle">(Obrigatório para menores de idade)</div>
      </legend>

      <div className="form-parent">
        <div className="form-parent__inputs">
          <input className="input" id="parentId" hidden type="text" name="parentId" />
          <div id="parent" className="form-group">
            <label >Nome</label>
            <input className="input" id="parentName" type="text" name="city" />
            <p id="parentNameValidation" hidden className="feedback-error">Por favor, informe o nome do seu
              responsável
        legal</p>
          </div>
          <div id="parent" className="form-group">
            <label >Telefone</label>
            <div className="phone">
              <input className="input" id="parentPhoneId" hidden type="text" name="parentPhoneId" />
              <input id="parentPhoneCode" className="input phone__code" placeholder="88" />
              <input id="parentPhoneNumber" className="input phone__number" placeholder="8899-7766" />
            </div>
            <p id="parentPhoneValidation" hidden className="feedback-error">
              Por favor, informe corretamente o telefone responsável legal
      </p>
          </div>
        </div>
        <div className="form-parent__delete">
          <label className="btn--icon-label ">
            <input id="licenseDestroy" type="checkbox" name="parentDestroy" />
            <i className="icon-trash icon--danger"></i>
          </label>
        </div>
      </div>
    </fieldset>

    <div className="form-action">
      <button className="btn btn--block" type="submit">Salvar Cliente</button>
    </div>
  </form>
);

export default CustomerRegisterForm;
