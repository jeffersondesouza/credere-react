import dateCoverter from "../../../../utils/date-coverter";

const selectMainPhone = (phones) => {
  const mainPhone = phones.find(phone => phone.main) || phones[0];
  return `(${mainPhone.code}) - ${mainPhone.number}`;
}

function selectMainEmail(emails) {
  const mainEmail = emails.find(email => email.main) || emails[0];
  return mainEmail.address;
}

function setLocation(city, state) {
  const cityState = city ? city : 'cidade não informada';
  return `${cityState}, ${state}`;
}


export const mapCustomers = (customers) => customers.map(customer => ({
  ...customer,
  mainEmail: selectMainEmail(customer.emails),
  mainPhone: selectMainPhone(customer.phones),
  location: setLocation(customer.city, customer.state)
}));


export default {
  mapCustomers,
}