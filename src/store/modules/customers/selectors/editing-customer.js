import dateConverter from './../../../../utils/date-coverter';
import caseParser from './../../../../utils/customer-case-parser';


export const editingCustomer = (customer) => {
console.log('customer', customer);

  /* We need parse the date to format yyyy-mm-dd to ensure the input type=date coul read and mount the date  */
  const customerDatesParsed = {
    ...customer,
    birthday: dateConverter.toDateInputFormat(customer.birthday),
    driver_license: {
      ...customer.driver_license,
      issued_at: dateConverter.toDateInputFormat(customer.driver_license.issued_at)
    }
  };

  return caseParser.toViewCase(customerDatesParsed)

}

export default {
  editingCustomer,
}