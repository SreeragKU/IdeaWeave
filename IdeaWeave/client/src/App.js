import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* import all components */
import Homepage from './components/Homepage';
import Username from './components/Username';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';

/* root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Homepage></Homepage>
    },
    {
        path : '/username',
        element : <Username></Username>
    },
    {
        path : '/register',
        element : <Register></Register>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    }
])

export default function App() {
    return (
        <main>
            <RouterProvider router={router}></RouterProvider>
        </main>   
    )
}