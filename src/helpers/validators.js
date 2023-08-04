function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!regex.test(email)) {
    return false;
  }

  return true;
}

function validatePassword(password) {
  const checks = [
    { regex: /[A-Z].*[A-Z]/, message: 'Must contain at least 2 uppercase letters' },
    { regex: /[a-z].*[a-z]/, message: 'Must contain at least 2 lowercase letters' },
    { regex: /\d.*\d/, message: 'Must contain at least 2 digits' },
    { regex: /[\W_].*[\W_]/, message: 'Must contain at least 2 special characters' },
  ];

  let valid = true;
  for (let i = 0; i < checks.length; i++) {
    if (!checks[i].regex.test(password)) {
      valid = false;
    }
  }

  return valid;
}

function validateFirstName(firstName) {
  const regex = /^[a-zA-Z]{2,50}$/;
  if (!regex.test(firstName)) {
    return false;
  }

  return true;
}

function validateLastName(lastName) {
  const regex = /^[a-zA-Z]{2,50}$/;
  // If the name is empty, return true
  if (!lastName) {
    return true;
  }

  return regex.test(lastName);
}

function validateAddress(address) {
  if (address.length < 10) {
    return false;
  }

  return true;
}

function validateCountryCode(countryCode) {
  if (!countryCode) {
    return false;
  }

  return true;
}

function validatePhoneNumber(phoneNumber) {
  const regex = /^[6-9][0-9]{9}$/;
  if (!regex.test(phoneNumber)) {
    return false;
  }

  return true;
}

const validate = {
  emailId: validateEmail,
  password: validatePassword,
  firstName: validateFirstName,
  lastName: validateLastName,
  address: validateAddress,
  countryCode: validateCountryCode,
  phoneNumber: validatePhoneNumber,
};

export default validate;
