import React from 'react'
import styles from '../styles/Homepage.module.css';

export default function Homepage() {
  return (
    <div className={styles.body}>
    <div className = "container mx-auto">
      <div className = 'flex justify-center items-center h-screen'>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center'>
            <div className= {styles.heading}>
            <h4 className = 'text-9xl font-bold'>IdeaWeave</h4>
            </div>
            <div className = {styles.text}>
              <span className = 'py-6 text-2xl w-2/3 font-bold text-center'> 
                The CMS to elevate your Idea from a spark to spectacle
              </span>
            </div>
            <div className="text-center py-4">
              <span><a className='text-green-500' href="/username">Login</a> | | <a className='text-red-500' href="/register">Register</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
