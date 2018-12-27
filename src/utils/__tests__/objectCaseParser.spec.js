
import parser from '../customerCaseParser.js';


describe('ObjectCaseParser', () => {

  describe('When receive Camel Case Objects', () => {

    it('should pass customer to snack case - Server Case', () => {
      const snackCase = parser.toServerCase(camelCaseObject, true);

      expect(snackCase.driveLicense).to.be.eql(undefined);
      expect(snackCase.driver_license.issued_at).to.be.eql(camelCaseObject.driveLicense.issueAt);
    });


    it('should pass customer to snack case without id - Server Case', () => {
      const snackCase = parser.toServerCase(camelCaseObject);
      expect(snackCase.driver_license.issued_at).to.be.eql(camelCaseObject.driveLicense.issueAt);
      expect(snackCase.id).to.be.eql(undefined);
    });

  });

  describe('When receive Snack case Objects', () => {

    it('should pass customer to snack case - Frontend case', () => {
      const camelCase = parser.toViewCase(snackCaseObject, true);
      expect(camelCase.driver_license).to.be.eql(undefined);
      expect(camelCase.driveLicense.issueAt).to.be.eql(snackCaseObject.driver_license.issued_at);
    });

  });


});


const snackCaseObject = {
  'id': 123,
  'name': 'Enzo dos Santos',
  'birthday': '31/12/1991',
  'driver_license': {
    'id': 24,
    'number': '642123',
    'issued_at': '31/12/2017'
  },
  'state': 'RN',
  'city': 'Natal',
  'phones': [{
    'id': 37,
    'code': '99',
    'number': '99999-9999'
  }, {
    'id': 38,
    'code': '88',
    'number': '88888-8888'
  }],
  'emails': [{
    'id': 21,
    'address': 'enzo@dos-sant.os'
  }],
  'parent': {
    name: 'name',
    code: 'code',
    number: 'number'
  }
}

const camelCaseObject = {
  'name': 'Segundo Silvaq',
  'birthdate': '0002-02-12',
  'state': '222',
  'city': '22',
  'driveLicense': {
    'number': '222',
    'issueAt': '2222-02-22'
  },
  'phones': [{
    'name': '0',
    'code': '22',
    'number': '22',
    'id': '',
    'destroy': false,
    'mainPhone': false
  }],
  'emails': [{
    'name': '0',
    'address': '22222',
    'id': '',
    'destroy': false,
    'mainEmail': false
  }],
  'parent': {
    'name': '22',
    'phone': {
      'id': '',
      'code': '22',
      'number': '22',
      'destroy': false,
      'mainPhone': false
    }
  }
}
