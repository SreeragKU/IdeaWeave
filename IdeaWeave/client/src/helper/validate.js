import { toast } from 'react-hot-toast';
import { authenticate } from './helper';

// Validate login page username
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);
  if (values.username) {
    // Check if the user exists
    const { status } = await authenticate(values.username);
    if (status !== 200) {
      errors.exist = 'User does not exist';
    }
  }
  return errors;
}

// Validate password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

// Validate reset password
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);
  if (values.password !== values.confirm_pwd) {
    errors.exist = 'Passwords do not match!';
  }
  return errors;
}

// Validate register form
export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

/**********************Functions****************************/

// Validate password
function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = 'Password required!';
  } else if (values.password.includes(" ")) {
    errors.password = 'Invalid Password!';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be more than 8 characters long!';
  } else if (!specialChars.test(values.password)) {
    errors.password = 'Password must have special character!';
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter!';
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = 'Password must contain at least one lowercase letter!';
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Password must contain at least one number!';
  }

  return errors;
}

// Validate Username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = 'Username Required!';
  } else if (values.username.includes(" ")) {
    error.username = 'Invalid Username!';
  }

  return error;
}

// Validate email
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = 'Email Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = 'Invalid email address';
  }
  return error;
}
