import React, { Component } from 'react'

import api from './store/api/customer.api';

import Header from './components/layout/Header';
import CustomerRegisterContainer from './containers/CustomerRegisterContainer';
import CustomerListContainer from './containers/CustomerListContainer';

class App extends Component {
  render() {
    return (
      <main className="main-block">
        <Header />
        <CustomerRegisterContainer />
        <CustomerListContainer />
      </main>
    );
  }
}


export default App;