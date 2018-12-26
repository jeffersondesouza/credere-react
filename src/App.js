import React, { Component } from 'react'

import api from './store/api/customer.api';

import Header from './components/Header';
import CustomerRegisterContainer from './containers/CustomerRegisterContainer';
import CustomerListContainer from './containers/CustomerListContainer';

class App extends Component {

  componentDidMount() {
    console.log('mount');

    api.getCustomers()
      .then(res => console.log(res));

  }

  /*         <Header />
        <CustomerRegisterContainer />
        <CustomerListContainer /> */

  render() {
    return (

      <main className="main-block">
        <header className="header">
          <figure className="header__brand">
            <img className="header__brand-img" srcSet="src/assets/img/credere-logo.png" alt="credere logo" />
          </figure>
        </header>

        <section className="register">
          <header className="register__header">
            <h2>Casdastro de Clientes</h2>
          </header>
          <div className="register__body">

            <div id="customer-crud-msg-view" className="register__feedback register__feedback--success"></div>



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
                  <ul id="phones"></ul>
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
                  <ul id="emails"> </ul>
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




          </div>
        </section>

        <section id="customers-view" className="customers-block">

          <ul class="customers">
            <li class="customer">
              <div class="customer__info">
                <header class="customer__header">
                  <h3 class="customer__title">customer.name</h3>
                  <div class="customer__licence">
                    <p title="licença"><i class="icon-address-card-o customer__licence-icon"></i>customer.driver_license ? (customer.driver_license.number) : ''</p>
                    <p title="Data de Emissão"><i class="icon-calendar-empty customer__licence-icon"></i>customer.driver_license ? (customer.driver_license.issued_at) : ''</p>
                    {/* ${customer.driver_license ? (``): ''} */}
                  </div>
                </header>
                <div class="customer__contact">
                  <div class="customer__contact-header">
                    <p class="customer__contact-phone"><i class="icon-phone"></i>phoneNumber(customer.phones)</p>
                    <p class="customer__contact-email"><i class="icon-mail"></i>email(customer.emails)</p>
                  </div>
                  <p class="customer__contact-location"><i class="icon-location "></i>location(customer.city, customer.state)</p>
                </div>
              </div>

              <div class="customer__actions">
                <button class="btn btn--round btn--icon btn--edit" type="button" name="edit" value="${customer.id}"><i class="icon-pencil"></i></button>
                <button class="btn btn--round btn--icon btn--danger" type="button" name="delete" value="${customer.id}"><i class="icon-trash"></i></button>
              </div>

            </li>
          </ul>



        </section>
      </main>

    );
  }
}


export default App;