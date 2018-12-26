import React, { Component } from 'react'

import api from  './store/api/customer.api';

import IconsPage from './components/IconsPage';

class App extends Component {

  componentDidMount(){
    console.log('mount');
    
    api.getCustomers()
      .then(res=>console.log(res));
    
  }

  render() {
    return (
      <IconsPage />
    );
  }
}


export default App;