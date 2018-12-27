import axios from 'axios';

const getCustomers = () => axios.get('customers')
  .then(res => res.data)
  .catch(err => {
    throw new Error('Could not load Customers');
  });


const save = (customer) => {
  if (!customer) {
    throw new Error('Pass an user to create');
  }
  return axios
    .post('customers', customer)
    .then(res => ({
      msg: 'Customer saved with success!',
      customer: res.data
    }))
    .catch(err => {
      throw new Error('Could not save the Customer');
    });
}

const update = (customer) => {
  if (!customer || !customer.id) {
    throw new Error('Pass the user data and ID');
  }

  return axios
    .patch(`customers/${customer.id}`, customer)
    .then(res => ({
      msg: 'Customer Updated with success!',
      customer: res.data
    }))
    .catch(err => {
      throw new Error('Could not update the Customer');
    });
}


const remove = (userId) => {
  if (!userId) {
    throw new Error('Pass the user ID');
  }

  return axios
    .delete(`customers/${userId}`)
    .then(res => ({
      msg: 'Customer Deleted with success!',
      customer: res.data
    }))
    .catch(err => {
      throw new Error('Could not delete the Customer');
    });
}

export default {
  getCustomers,
  save,
  update,
  remove
}
