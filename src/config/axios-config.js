import axios from 'axios';

const configure = () => axios.defaults.baseURL = API_URL;

export default configure();
