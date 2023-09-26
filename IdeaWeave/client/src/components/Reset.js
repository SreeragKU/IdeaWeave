import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Login/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate';

export default function Reset() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      confirm_pwd: ''
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`Username ${styles.Login}`}>
      <div className='container mx-auto h-screen flex justify-center items-center'>

        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'> Reset </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter new password.
            </span>
          </div>
          <form className='py-15' onSubmit={formik.handleSubmit}> 
            <div className='textbox flex flex-col items-center gap-6'>
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type={showPassword ? 'text' : 'password'}
                placeholder='New Password'
              />
              <input
                {...formik.getFieldProps('confirm_pwd')}
                className={styles.textbox}
                type={showPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
              />
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={showPassword}
                  onChange={handleShowPassword}
                />
                Show Password
              </label>
              <button className={styles.btn} type='submit'> Reset </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}
