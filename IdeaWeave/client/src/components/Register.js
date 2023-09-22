import React from 'react'
/*import { Link } from 'react-router-dom';*/
import avatar from '../assets/avatar.png';
import styles from '../styles/Register.module.css';

export default function Register() {
  return (
    <div className={styles.body}>
    <div className = "container mx-auto">
      <div className = 'flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <div className={styles.heading}>
            <h4 className = 'text-5xl font-bold'>Registration</h4>
            </div> 
            <div className={styles.text}>
            <form className='py-1'>
              <div className='profile flex justify-center py-4'>
                <img src={ avatar } className={styles.profile_img} alt="avatar" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                <input className={styles.textbox} type="text" placeholder="User Name" required/>
                <input className={styles.textbox} type="email" placeholder="Email Address" required/>
                <input className={styles.textbox} type="password" placeholder="Password" required/>
                <input className={styles.textbox} type="password" placeholder="Confirm Password" required/>
                <button type='submit' className={styles.btn}>Register</button>
              </div>
              <div className="text-center py-4">
                <span className='text-gray-300'>Already have an account? <a className='text-red-500' href="/username">Log In</a></span>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
