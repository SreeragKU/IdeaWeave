import toast from 'react-hot-toast';
import { authenticate } from './helper';

//Validate login page username
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    if(values.username){
        //check user exist
        const {status} = await authenticate(values.username);
        if(status !== 200){
            errors.exist = toast.error('User does not exist')
        }
    }
    return errors;
}

//validate password
export async function passwordValidate(values){
    const errors = passwordVerify({},values);
    return errors;
}

//validate reset password
export async function resetPasswordValidation(values){
    const errors = passwordVerify({},values);
    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Passwords do not match!")
    }
    return errors;
}

//validate register form
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}



/**********************Functions****************************/

//Validate password
function passwordVerify(errors = {}, values){

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error('Password required!');
    }
    else if(values.password.includes(" ")){
        errors.password = toast.error("Invalid Password!");
    }
    else if(values.password.length < 8){
        errors.password = toast.error("Password must be more than 8 characters long!");
    }
    else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character!");
    }
    else if (!/[A-Z]/.test(values.password)) {
      errors.password = toast.error("Password must contain at least one uppercase letter!");
    } 
    else if (!/[a-z]/.test(values.password)) {
      errors.password = toast.error("Password must contain at least one lowercase letter!");
    } 
    else if (!/\d/.test(values.password)) {
      errors.password = toast.error("Password must contain at least one number!");
    }
  
    return errors;
  }

//Validate Username
function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required!');
    }
    else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username!')
    }

    return error;
}

//Validate email
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required");
    }
    else if(values.email.includes("")){
        error.email = toast.error("Wrong Email");
    }
    else if(!/^A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("invalid email address");
    }
    return error;
}