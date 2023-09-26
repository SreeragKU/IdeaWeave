import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Login/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';

export default function profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, {profile : file || ''})
      console.log(values);
    }
  });

  const onUpload = async e => {
    const selectedFile = e.target.files[0]; 
    if (selectedFile) {
      const base64 = await convertToBase64(selectedFile);
      setFile(base64);
    }
  };
  

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`Username ${styles.Login}`}>
      <div className='container mx-auto h-screen flex justify-center items-center'>

        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'> Profile </h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Your can update your details.
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}> 
            <div className='profile flex justify-center py-4'>
              <label htmlFor='profile'>
                <img src={file || avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input onChange={onUpload} type='file' id='profile' name='profile'/>
            </div>
            <div className='textbox flex flex-col items-center gap-6'>
              <div className='name flex-3/4 gap-10'>
                
              </div>
              <input
                {...formik.getFieldProps('email')}
                className={styles.textbox}
                type='text'
                placeholder='Email*'
              />
              <input
                {...formik.getFieldProps('username')}
                className={styles.textbox}
                type='text'
                placeholder='Username*'
              />
              <input
              {...formik.getFieldProps('password')}
              className={styles.textbox}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password*'
            />
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={showPassword}
                  onChange={handleShowPassword}
                />
                Show Password
              </label>
              <button className={styles.btn} type='submit'> Register </button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>Already Registered? <Link className='text-red-500' to="/username"> Login now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}