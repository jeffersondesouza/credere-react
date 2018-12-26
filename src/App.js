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

  render() {
    return (
      <div>
        <Header />
        <CustomerRegisterContainer />
        <CustomerListContainer />
      </div>
    );
  }
}


export default App;