const hasResponseError = (error) => error && error.response && error.response.data && error.response.data.errors;

const getFirstResponseError = (error) => error.response.data.errors[0];

export default {
  hasResponseError,
  getFirstResponseError
}