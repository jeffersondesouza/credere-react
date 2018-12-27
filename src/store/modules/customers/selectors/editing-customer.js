import dateConverter from './../../../../utils/date-coverter';
import caseParser from './../../../../utils/customer-case-parser';


export const editingCustomer = (customer) => {

  /* We need parse the date to format yyyy-mm-dd to ensure the input type=date coul read and mount the date  */


  let driverLicense = {
    id: '',
    issueAt: '',
    number: ''
  };

  let parent = {
    id: '',
    name: '',
    phone: {
      id: '',
      code: '',
      number: ''
    }
  };

  if (customer.parent) {
    parent = { ...customer.parent }
  }

  if (customer.driver_license) {
    driverLicense = {
      ...customer.driver_license,
      issued_at: (customer.driver_license && customer.driver_license.issued_at)  ? dateConverter.toDateInputFormat(customer.driver_license.issued_at) : ''
    }
  }

  
  const customerDatesParsed = {
    ...customer,
    birthday: customer.birthday ? dateConverter.toDateInputFormat(customer.birthday) : '',
    driver_license: { ...driverLicense },
    parent
  };



  return caseParser.toViewCase(customerDatesParsed)

}

export default {
  editingCustomer,
}