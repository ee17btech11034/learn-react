import { createRoot } from 'react-dom/client'
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import { Homepage, AboutUs, ContactUs, User } from '../components' // index.js is automatically gets pulled

/* // working perfect
const router = createBrowserRouter([
  {
    path: '/', //this is main path
    element: <Layout/>, //we will render Layout when path=/
    children: [ // for about, contact page and all
      {path: "",
        element: <Homepage/> //middle content is homepage when '/'
      },
      {path: "about",
        element: <AboutUs/> //middle content is About when '/about'
      },
      {path: "contact-us",
        element: <ContactUs/> //middle content is contact form when '/contact-us'
      }
    ]
  }
])

*/ 

//another way to create router is: --> this is easy for understanding
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Homepage/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='contact-us' element={<ContactUs/>}/>
        <Route path='user/:userid' element={<User/>}/> 
    </Route>
  )
)
//dynamic data in link -> userid

// loader Use
  // <Route path='github' loader={fetchmethod} element={<GitHub/>}/> 

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
)
