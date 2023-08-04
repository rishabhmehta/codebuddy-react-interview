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
      // console.log(checks[i].message);
      valid = false;
    }
  }

  return valid;
}

function validateName(firstName) {
  const regex = /^[a-zA-Z]{2,50}$/;
  if (!regex.test(firstName)) {
    return false;
  }

  return true;
}

function validateAddress(address) {
  if (address.length < 10) {
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

// const validate = {
//   email: validateEmail,
//   password: validatePassword,
//   firstName: validateName,
//   lastName: validateName,
//   address: validateAddress,
//   phoneNumber: validatePhoneNumber,
// };

// export default validate;
export { validateEmail, validatePassword, validateName, validateAddress, validatePhoneNumber };
