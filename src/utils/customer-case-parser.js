export const toServerCase = (data, includeIds) => {

  const driver_license = {
    ...data.driveLicense,
    issued_at: data.driveLicense.issueAt
  }

  const snackVersion = {
    ...data,
    driver_license: { ...driver_license }
  };

  if (!includeIds) {
    delete snackVersion.id;
  }

  delete snackVersion.driveLicense;

  return snackVersion;
}

export const toViewCase = (data) => {

  const driveLicense = {
    ...data.driver_license,
    issueAt: data.driver_license.issued_at
  }

  const snackVersion = {
    ...data,
    driveLicense: { ...driveLicense }
  };

  delete snackVersion.driver_license;

  return snackVersion;
}


export default {
  toServerCase,
  toViewCase,
}
