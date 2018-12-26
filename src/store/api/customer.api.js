import axios from 'axios';

const getCustomers = () => axios.get('customers')
  .then(res => res.data);



export default {
  getCustomers,
}