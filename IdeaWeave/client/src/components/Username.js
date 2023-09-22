import React from 'react'
import avatar from '../assets/profile1.jpg';
import styles from '../styles/Username.module.css';

export default function Username() {
  return (
    <div className={styles.body}>
    <div className = "container mx-auto">
      <div className = 'flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <div className={styles.heading}>
            <h4 className = 'text-5xl font-bold'>Login</h4>
            </div> 
            <div className={styles.text}>
            <form className='py-1'>
              <div className='profile flex justify-center py-4'>
                <img src={ avatar } className={styles.profile_img} alt="avatar" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
              <input className={styles.textbox} type="email" placeholder="Email Address" required/>
                <input className={styles.textbox} type="password" placeholder="Password" required/>
                <button type='submit' className={styles.btn}>Login</button>
              </div>
              <div className="text-center py-4">
                <span className='text-gray-300'>Not a Member? <a className='text-green-600' href="/register">Register Now</a></span>
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
