import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/Login/profile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate';
import useFetch from '../hooks/fetch.hook';
import { useAuthStore } from '../store/store';

export default function Password() {
  const [showPassword, setShowPassword] = useState(false);
  const { username, setUsername } = useAuthStore((state) => state.auth); // Get setUsername from the store
  const [{ isLoading, apiData, serverError }, setData] = useFetch(`/user/${username}`);

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    }
  });

  useEffect(() => {
    // Check if apiData is populated and update state
    if (apiData) {
      // Access setUsername from the store and set the username
      useAuthStore.getState().setUsername(apiData.username);
    }
  }, [apiData]);

  if (isLoading) return <h1 className='text-2xl font-bold'>Loading...</h1>;
  if (serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>;

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`Username ${styles.Login}`}>
      <div className='container mx-auto h-screen flex justify-center items-center'>
        <Toaster position='top-center' reverseOrder={false} />
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-5xl font-bold'> Hello {apiData?.username || 'Again!'}</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={apiData?.profile || avatar} className={styles.profile_img} alt='avatar' />
            </div>
            <div className='textbox flex flex-col items-center gap-6'>
              <input
                {...formik.getFieldProps('password')}
                className={styles.textbox}
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              <label className='flex items-center gap-2'>
                <input
                  type='checkbox'
                  checked={showPassword}
                  onChange={handleShowPassword}
                />
                Show Password
              </label>
              <button className={styles.btn} type='submit'>
                Sign In
              </button>
            </div>
            <div className='text-center py-4'>
              <span className='text-gray-500'>
                Forgot Password?
                <Link className='text-red-500' to='/recovery'>
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
