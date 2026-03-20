import { createRoot } from 'react-dom/client'
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <UserContextProvider>
        <h1> Hello world </h1>
        <Login/>
        <Profile/>
    </UserContextProvider>
  </React.StrictMode>
)
