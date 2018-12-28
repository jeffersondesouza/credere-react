import dateCoverter from "./date-coverter";


export const toServerCase = (data, includeIds) => {

  const driver_license = {
    ...data.driverLicense,
    issued_at: (data.driverLicense && data.driverLicense.issueAt) ? dateCoverter.toServerFormat(data.driverLicense.issueAt) : ''
  }

  const custumerOnServerFormat = {
    ...data,
    birthday: data.birthday ? dateCoverter.toServerFormat(data.birthday) : '',
    driver_license: { ...driver_license },
    state: data.bornState
  };

  
  if (!data.id) {
    delete custumerOnServerFormat.id;
  }
  
  delete custumerOnServerFormat.mainEmail;
  delete custumerOnServerFormat.mainPhone;
  delete custumerOnServerFormat.location;
  delete custumerOnServerFormat.driverLicense;
  delete custumerOnServerFormat.bornState;

  return custumerOnServerFormat;
}

export const toViewCase = (data) => {

  const driverLicense = {
    ...data.driver_license,
    issueAt: data.driver_license.issued_at
  }

  delete driverLicense.issued_at;

  const custumerOnServerFormat = {
    ...data,
    driverLicense: { ...driverLicense }
  };

  delete custumerOnServerFormat.driver_license;

  return custumerOnServerFormat;
}


export default {
  toServerCase,
  toViewCase,
}
