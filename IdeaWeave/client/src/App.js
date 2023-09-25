import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import components
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';

// Routes
const router = createBrowserRouter([
  {
    path : '/',
    element: <HomePage></HomePage>
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
