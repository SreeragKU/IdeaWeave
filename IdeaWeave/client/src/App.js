import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import components
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import  Username from './components/Username';
import  Register from './components/Register';
import  Profile from './components/Profile';
import  Recovery from './components/Recovery';
import  Reset from './components/Reset';
import  Password from './components/Password';

// Routes
const router = createBrowserRouter([
  {
    path : '/',
    element: <HomePage></HomePage>
  },
  {
    path : '/register',
    element: <Register></Register>
  }, 
  {
    path : '/username',
    element: <Username></Username>
  }, 
  {
    path : '/profile',
    element: <Profile></Profile>
  }, 
  {
    path : '/recovery',
    element: <Recovery></Recovery>
  }, 
  {
    path : '/reset',
    element: <Reset></Reset>
  },
  {
    path : '/password',
    element: <Password></Password>
  },
  {
    path : '*',
    element: <PageNotFound></PageNotFound>
  }
])

export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}
