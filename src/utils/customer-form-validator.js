import dateCoverter from "./date-coverter";

export const isFormValid = (formValue) => {
  return formValue.nameValid
    && formValue.birthdayValid
    && formValue.cityValid
    && formValue.driverLicenseValid
    && formValue.bornStateValid

    && formValue.phonesValid.maxPhoneValid
    && formValue.phonesValid.minPhoneValid
    && formValue.phonesValid.phoneValid

    && formValue.emailsValid.minEmailValid
    && formValue.emailsValid.maxEmailValid

    && formValue.parentValid.parentNameValid
    && formValue.parentValid.parentPhoneValid;
}

export const isNameValid = (name) => {
  if (name) {
    return true;
  }
  return false;
}


export const isBirthDayValid = (birthday) => {
  if (birthday) {
    return true;
  }
  return false;
}


export const isLicenseValid = (birthday, licenseNumber, licenseIssueAt) => {
  if (!birthday) {
    return true
  }

  let customerAge = new Date().getFullYear() - new Date(birthday).getFullYear();

  if (customerAge < 18) {
    return true
  }

  if (!licenseNumber || !licenseIssueAt) {
    return false;
  }

  return true;
}


export const isStateValid = (stateValue) => {
  if (stateValue) {
    return true;
  }
  return false;
}

export const isCityValid = (cityEl, stateValue, licenseNumber, ) => {

  if (!stateValue || !licenseNumber) {
    return true;
  }

  const firstLicenseNumber = +`${licenseNumber}`[0];
  const isRn = stateValue.toLowerCase() === 'rn';

  if (!cityEl && isRn && (firstLicenseNumber === 6)) {
    return false;
  }

  return true;
}


export const isPhonesValid = (phonesList) => {
  const phones = phonesList
    .filter(phone => !phone.destroy);

  let maxPhoneValid = true;
  let minPhoneValid = true;
  let phoneValid = true;


  if (phones.length < 1) {
    minPhoneValid = false;
    return { maxPhoneValid, minPhoneValid, phoneValid };
  }

  if (phones.length > 4) {
    maxPhoneValid = false;
    return { maxPhoneValid, minPhoneValid, phoneValid };
  }


  if (phones.find(phone => !phone.code || !phone.number)) {
    phoneValid = false;
    return { maxPhoneValid, minPhoneValid, phoneValid };
  }

  return { maxPhoneValid, minPhoneValid, phoneValid };

}

export const isEmailsValid = (emailList) => {
  const emails = emailList.filter(email => !email.destroy && email.address);

  let minEmailValid = true;
  let maxEmailValid = true;

  if (emails.length < 1) {
    minEmailValid = false;
    return { minEmailValid, maxEmailValid };
  }

  if (emails.length > 3) {
    maxEmailValid = false;
    return { minEmailValid, maxEmailValid };
  }

  return { minEmailValid, maxEmailValid };
}


export const isParentValid = (birthdayEl, parentNameEl, phone) => {

  let parentNameValid = true;
  let parentPhoneValid = true;



  if (!birthdayEl || dateCoverter.isOfAge(birthdayEl)) {
    return { parentNameValid, parentPhoneValid };
  }


  if (!parentNameEl) {
    parentNameValid = false;
  } else {
    parentNameValid = true;
  }

  if (!phone.code || !phone.number) {
    parentPhoneValid = false;
  } else {
    parentPhoneValid = true;
  }

  return { parentNameValid, parentPhoneValid };
}


export default {
  isFormValid,
  isNameValid,
  isBirthDayValid,
  isLicenseValid,
  isStateValid,
  isCityValid,
  isPhonesValid,
  isEmailsValid,
  isParentValid,
}