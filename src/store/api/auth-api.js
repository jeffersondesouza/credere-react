import axios from 'axios';

const login = ({ email, password }) => axios
  .post('user/login', { email, password })
  .then(res=>res.data);

const signup = ({ email, password, confirmPassword }) => 
  axios.post('user/signup', { email, password, confirmPassword })

export default {
  login,
  signup
}