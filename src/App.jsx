import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Home from './page/homePage/Homepage'
import SingIn from './page/singIn/SingIn'
import SingUp from './page/singUp/SingUp'
import Admi from './page/admipage/Admi'

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/sing_up",
      element: <SingUp />
    },
    {
      path: "/sing_in",
      element: <SingIn />
    }
    ,
    {
      path: "/admi",
      element: <Admi />
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

