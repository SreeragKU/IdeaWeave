import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Login/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';

export default function Recovery() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  });

  return (
    <div className={`Username ${styles.Login}`}>
      <div className='container mx-auto h-screen flex justify-center items-center'>

        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'> Recovery </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>
          <form className='py-15'> 
            <div className='textbox flex flex-col items-center gap-6'>
              <div className='input text-center'>
                <span className='py-4 text-sm text-left text-gray-500'> 
                Enter 6 digit OTP sent to your email address.
                </span>
                <input
                  className={styles.textbox}
                   type='text'
                  placeholder='OTP'
                />
              </div>
              <button className={styles.btn} type='submit'> Enter </button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Can't get OTP? <button className='text-red-500'> Resend</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
